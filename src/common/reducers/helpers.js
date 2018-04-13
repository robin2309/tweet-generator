export function getMatchingCountryFromState(state, countryName) {
  return state.countries.list.items.find(
    country => country.label.toLowerCase() === countryName.toLowerCase()
  );
}

export function getMatchingRetailerFromState(state, encodedRetailerName) {
  const decodedRetailerName = decodeURIComponent(encodedRetailerName);
  return state.retailers.list.items.find(
    retailer =>
      retailer.name.toLowerCase() === decodedRetailerName.toLowerCase()
  );
}
