// TODO: move config elsewhere
const Config = {
  BASE: 'https://flowrspot-api.herokuapp.com/api/v1',
  FLOWERS_INDEX: '/flowers',
};

const FlowerService = {
  getFlowersIndex: async () => {
    try {
      const response = await fetch(Config.BASE + Config.FLOWERS_INDEX);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
};

export default FlowerService;
