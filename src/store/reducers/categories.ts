import { createStandaloneToast } from "@chakra-ui/toast";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICategory from "interfaces/Category";
import categoriesService from "services/categories";

const initialState: ICategory[] = [];

const { toast } = createStandaloneToast();

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  categoriesService.find
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCategories.fulfilled,
        (_, { payload }: PayloadAction<ICategory[]>) => {
          toast({
            title: "Sucesso!",
            description: "Categorias carregadas com sucesso!",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          return payload;
        }
      )
      .addCase(fetchCategories.pending, () => {
        toast({
          title: "Carregando!",
          description: "Categorias sendo carregadas!",
          status: "loading",
          duration: 1000,
          isClosable: true,
        });
      })
      .addCase(fetchCategories.rejected, () => {
        toast({
          title: "Erro!",
          description: "Houve um problema ao carregar as categorias",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  },
});

export default categoriesSlice.reducer;
