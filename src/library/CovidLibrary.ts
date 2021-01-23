import axios from "axios";

/**
 * library for request to api covid https://kawalcorona.com/api/
 */
export class CovidLibrary {

    /**
     * Data Indonesia
     */
    public async getIndonesia() {
        return axios
            .get('https://api.kawalcorona.com/indonesia')
            .then(result => result.data)
            .catch(error => {
                throw error
            });
    }
    
    /**
     * Data Per Provinsi
     */
    public async getProvinsi() {
        return axios
            .get('https://api.kawalcorona.com/indonesia/provinsi')
            .then(result => result.data)
            .catch(error => {
                throw error
            });
    }
}