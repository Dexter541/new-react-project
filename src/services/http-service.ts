import apiClient from "./api-client";

//GENERIC HTTP SERVICE IT INCLUDES
//- A GENERIC METHOD AND WE DO THAT BY ADDING <T>
//- GENERIC CRUD FUCTIONS
interface Entity {
	id: number;
}
class HttpService {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getAll<T>() {
		const controller = new AbortController();
		const request = apiClient.get<T[]>(this.endpoint, { signal: controller.signal });

		return { request, cancel: () => controller.abort() };
	}

	delete(id: number) {
		return apiClient.delete(this.endpoint + "/" + id);
	}

	update<T extends Entity>(entity: T) {
		return apiClient.patch(this.endpoint + "/" + entity.id, entity);
	}

	create<T>(entity: T) {
		return apiClient.post(this.endpoint, entity);
	}
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
