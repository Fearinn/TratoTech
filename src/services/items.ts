import instance from "commons/config/server"

const itemsService = {
    find: async () => {
        const response = await instance.get("/items")
        return response.data
    }
}

export default itemsService