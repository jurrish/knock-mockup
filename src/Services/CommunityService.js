import { apiRemote } from './crud.js';

class CommunityService {
  static getCommunity(id) {
    return apiRemote
      .get(`/community/${id}`);
  }
}

export default CommunityService;
