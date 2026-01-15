const fs = require('fs');
const path = require('path');

// Read the raw technician data
const rawData = fs.readFileSync(
  path.join(__dirname, '../data/technicians-raw.txt'),
  'utf-8'
);

// State name to slug mapping
const stateToSlug = {
  'ALABAMA': 'alabama',
  'ALASKA': 'alaska',
  'ARIZONA': 'arizona',
  'ARKANSAS': 'arkansas',
  'CALIFORNIA': 'california',
  'COLORADO': 'colorado',
  'CONNECTICUT': 'connecticut',
  'DELAWARE': 'delaware',
  'FLORIDA': 'florida',
  'GEORGIA': 'georgia',
  'HAWAII': 'hawaii',
  'IDAHO': 'idaho',
  'ILLINOIS': 'illinois',
  'INDIANA': 'indiana',
  'IOWA': 'iowa',
  'KANSAS': 'kansas',
  'KENTUCKY': 'kentucky',
  'LOUISIANA': 'louisiana',
  'MAINE': 'maine',
  'MARYLAND': 'maryland',
  'MASSACHUSETTS': 'massachusetts',
  'MICHIGAN': 'michigan',
  'MINNESOTA': 'minnesota',
  'MISSISSIPPI': 'mississippi',
  'MISSOURI': 'missouri',
  'MONTANA': 'montana',
  'NEBRASKA': 'nebraska',
  'NEVADA': 'nevada',
  'NEW HAMPSHIRE': 'new-hampshire',
  'NEW JERSEY': 'new-jersey',
  'NEW MEXICO': 'new-mexico',
  'NEW YORK': 'new-york',
  'NORTH CAROLINA': 'north-carolina',
  'NORTH DAKOTA': 'north-dakota',
  'OHIO': 'ohio',
  'OKLAHOMA': 'oklahoma',
  'OREGON': 'oregon',
  'PENNSYLVANIA': 'pennsylvania',
  'RHODE ISLAND': 'rhode-island',
  'SOUTH CAROLINA': 'south-carolina',
  'SOUTH DAKOTA': 'south-dakota',
  'TENNESSEE': 'tennessee',
  'TEXAS': 'texas',
  'UTAH': 'utah',
  'VERMONT': 'vermont',
  'VIRGINIA': 'virginia',
  'WASHINGTON': 'washington',
  'WEST VIRGINIA': 'west-virginia',
  'WISCONSIN': 'wisconsin',
  'WYOMING': 'wyoming'
};

// Parse the raw data
function parseTechnicians() {
  const lines = rawData.split('\n').map(line => line.trim());
  const stateData = {};

  let currentState = null;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this is a state header
    if (stateToSlug[line]) {
      currentState = stateToSlug[line];
      if (!stateData[currentState]) {
        stateData[currentState] = [];
      }
      i++;
      continue;
    }

    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }

    // This must be start of a technician entry if we have a current state
    if (currentState) {
      const techLines = [];
      techLines.push(line); // Business name
      i++;

      // Collect lines until we hit a blank line, another state, or end
      while (i < lines.length && lines[i] && !stateToSlug[lines[i]]) {
        techLines.push(lines[i]);
        i++;
      }

      const tech = parseTechnicianEntry(techLines);
      if (tech) {
        stateData[currentState].push(tech);
      }
    } else {
      i++;
    }
  }

  return stateData;
}

function parseTechnicianEntry(lines) {
  if (lines.length === 0) return null;

  const businessName = lines[0];
  let address = '';
  let phone = '';
  let contact = '';

  // Join remaining lines
  const infoText = lines.slice(1).join(' ');

  // Try to find phone number patterns
  const phonePattern = /(\d{3}[-.\s]?\d{3}[-.\s]?\d{4})/g;
  const phoneMatches = infoText.match(phonePattern);

  if (phoneMatches && phoneMatches.length > 0) {
    // Use the first phone number found
    phone = phoneMatches[0];

    // Find the position of the first phone number
    const phoneIndex = infoText.indexOf(phone);

    // Everything before first phone is address
    address = infoText.substring(0, phoneIndex).trim();

    // If there's text after the phone, it might be additional contact info
    const afterPhone = infoText.substring(phoneIndex + phone.length).trim();
    if (afterPhone) {
      contact = afterPhone;
    }
  } else {
    // No phone found
    address = infoText;
  }

  return {
    businessName,
    address: address || undefined,
    phone: phone || undefined,
    contact: contact || undefined
  };
}

// Generate complete states array
function generateAllStates(technicianData) {
  const allStates = [];

  for (const [stateName, slug] of Object.entries(stateToSlug)) {
    // Properly capitalize state names (e.g., "ALABAMA" -> "Alabama", "NEW YORK" -> "New York")
    const formattedName = stateName.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

    const stateInfo = {
      name: formattedName,
      slug: slug,
      description: `Find professional tanning bed repair technicians in ${formattedName}.`,
      technicians: technicianData[slug] || []
    };

    allStates.push(stateInfo);
  }

  // Sort alphabetically
  allStates.sort((a, b) => a.name.localeCompare(b.name));

  return allStates;
}

// Main execution
console.log('Parsing technician data...');
const technicianData = parseTechnicians();

console.log('Generating states data...');
const statesArray = generateAllStates(technicianData);

// Count stats
const totalTechs = statesArray.reduce((sum, state) => sum + state.technicians.length, 0);
const statesWithTechs = statesArray.filter(state => state.technicians.length > 0).length;

console.log(`\nImport Summary:`);
console.log(`- Total states: ${statesArray.length}`);
console.log(`- States with technicians: ${statesWithTechs}`);
console.log(`- Total technicians: ${totalTechs}`);

// Write to states.json
const outputPath = path.join(__dirname, '../data/states.json');
fs.writeFileSync(outputPath, JSON.stringify(statesArray, null, 2));

console.log(`\n✅ Successfully wrote data to ${outputPath}`);
