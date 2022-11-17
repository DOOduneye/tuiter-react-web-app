import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from './tuit-services';

export const findTuitsThunk = createAsyncThunk('tuits/findTuits', async () => await service.findTuits());