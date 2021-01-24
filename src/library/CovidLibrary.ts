import axios from "axios";

/**
 * library for request to api covid https://kawalcorona.com/api/
 */
export class CovidLibrary {

    /**
     * Data Indonesia
     */
    public async getIndonesia() {
        const url = "https://api.kawalcorona.com/indonesia";
        return this.axiosGetRequest(url);
    }
    
    /**
     * Data Per Provinsi
     */
    public async getProvinsi() {
        const url = 'https://api.kawalcorona.com/indonesia/provinsi';
        return this.axiosGetRequest(url);
    }

    /**
     * @param url 
     */
    protected async axiosGetRequest(url: string) {
        return axios
            .get(url)
            .then(result => result.data)
            .catch(error => {
                throw error
            });
    }
}