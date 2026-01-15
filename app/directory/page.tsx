'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import statesData from '../../data/states.json';

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');

  // Get all technicians with their state info
  const allTechnicians = useMemo(() => {
    const techs: any[] = [];
    statesData.forEach(state => {
      if (state.technicians) {
        state.technicians.forEach((tech: any) => {
          techs.push({
            ...tech,
            stateName: state.name,
            stateSlug: state.slug
          });
        });
      }
    });
    return techs;
  }, []);

  // Filter technicians
  const filteredTechnicians = useMemo(() => {
    return allTechnicians.filter(tech => {
      const matchesSearch = searchTerm === '' ||
        tech.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (tech.address && tech.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
        tech.stateName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesState = selectedState === 'all' || tech.stateSlug === selectedState;

      return matchesSearch && matchesState;
    });
  }, [allTechnicians, searchTerm, selectedState]);

  // Group technicians by state
  const techniciansByState = useMemo(() => {
    const grouped: Record<string, any[]> = {};
    filteredTechnicians.forEach(tech => {
      if (!grouped[tech.stateName]) {
        grouped[tech.stateName] = [];
      }
      grouped[tech.stateName].push(tech);
    });
    return grouped;
  }, [filteredTechnicians]);

  // Get states with technicians for dropdown
  const statesWithTechs = useMemo(() => {
    return statesData.filter(state => state.technicians && state.technicians.length > 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Tanning Bed Repair Technician Directory
          </h1>
          <p className="text-xl text-center text-blue-100 mb-8">
            Free directory of certified tanning bed repair professionals across the United States
          </p>
          <div className="bg-white/10 border border-white/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-blue-100 text-center">
              <strong>Disclaimer:</strong> This is a free directory. We are not responsible for any work performed by the independent companies listed. To be added or removed, call{' '}
              <a href="tel:321-636-3434" className="font-bold underline">
                321-636-3434
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white shadow-md sticky top-0 z-10 border-b">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Search Box */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search by business name, city, or state
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. 'Florida Sun Systems' or 'Tampa'"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* State Filter */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by state
              </label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All States ({allTechnicians.length} technicians)</option>
                {statesWithTechs.map(state => (
                  <option key={state.slug} value={state.slug}>
                    {state.name} ({state.technicians.length} technician{state.technicians.length !== 1 ? 's' : ''})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Showing <strong className="text-blue-700">{filteredTechnicians.length}</strong> technician{filteredTechnicians.length !== 1 ? 's' : ''}
              {selectedState !== 'all' && ` in ${statesData.find(s => s.slug === selectedState)?.name}`}
            </p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {Object.keys(techniciansByState).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(techniciansByState)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([stateName, techs]) => (
                <div key={stateName}>
                  {/* State Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">{stateName}</h2>
                    <Link
                      href={`/states/${techs[0].stateSlug}`}
                      className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
                    >
                      View {stateName} page →
                    </Link>
                  </div>

                  {/* Technicians Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techs.map((tech, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {tech.businessName}
                          </h3>
                          {tech.address && (
                            <p className="text-sm text-gray-600 mb-3">
                              📍 {tech.address}
                            </p>
                          )}
                        </div>

                        <a
                          href={`tel:${tech.phone}`}
                          className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-2 rounded-lg font-semibold transition"
                        >
                          📞 {tech.phone}
                        </a>

                        {tech.contact && (
                          <p className="text-xs text-gray-500 mt-3">
                            {tech.contact}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No technicians found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedState('all');
              }}
              className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Get Listed CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Are You a Tanning Bed Technician?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Get listed in our free directory and connect with salon owners looking for your services.
          </p>
          <a
            href="tel:321-636-3434"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-10 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            Call 321-636-3434 to Get Listed Free
          </a>
        </div>
      </div>
    </div>
  );
}
