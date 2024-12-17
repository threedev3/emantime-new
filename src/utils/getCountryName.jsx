import { Country } from 'country-state-city';

export const getFullCountryName = (countryCode) => {
    try {
      // Find the country using the ISO code
      const country = Country.getCountryByCode(countryCode);
      
      // Return full country name if found, otherwise return the original code
      return country ? country.name : countryCode;
    } catch (error) {
      console.error('Error converting country code:', error);
      return countryCode;
    }
  };