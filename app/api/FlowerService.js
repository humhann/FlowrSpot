// TODO: move config elsewhere
const Config = {
  BASE: 'https://flowrspot-api.herokuapp.com/api/v1',
  FLOWERS_INDEX: '/flowers',
  FLOWERS_SEARCH: '/flowers/search',
};

const FlowerService = {
  getFlowersIndex: async () => {
    try {
      const response = await fetch(`${Config.BASE}${Config.FLOWERS_INDEX}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },

  searchFlowers: async (searchTerm) => {
    try {
      const response = await fetch(`${Config.BASE}${Config.FLOWERS_SEARCH}?query=${encodeURIComponent(searchTerm)}`);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
};

export default FlowerService;
