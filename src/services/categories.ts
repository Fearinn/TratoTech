import instance from "commons/config/server"

const categoriesService = {
    find: async () => {
        const response = await instance.get("/categories")
        return response.data
    }
}

export default categoriesService