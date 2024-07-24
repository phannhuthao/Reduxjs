import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Student } from "../../interface";

// tạo ra các action call API : createAsyncThunks
export const getAllStudents: any = createAsyncThunk("students/getAllStudent", async () => {
    // call API ở đây
    let res = await axios.get("http://localhost:9999/student");
    return res.data;
});

// action thêm mới
export const createStudent: any = createAsyncThunk("students/createStudent", async (data: Student) => {
    // call API thêm mới
    let res = await axios.post("http://localhost:9999/student", data);
    return res.data;
});

// action thêm sửa
export const editStudent: any = createAsyncThunk("students/editStudent", async (data: Student) => {
    // call API sửa
    let res = await axios.put(`http://localhost:9999/student/${data.id}`, data);
    return res.data;
});

// action xóa
export const deleteStudent: any = createAsyncThunk("students/deleteStudent", async (id: number) => {
    // call API xóa
    await axios.delete(`http://localhost:9999/student/${id}`);
    return id;
});

const initialState: { data: Student[]; isLoading: boolean } = {
    data: [],
    isLoading: false,
};

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Các trạng thái của 1 action thunk: pending, fulfilled , rejected
        // pending: kết quả chưa xử lí xong , đang trong quá trình chờ
        // fulfilled: Quá trình thực hiện thành công
        // rejected: Quá trình thất bại

        // lấy danh sách
        builder.addCase(getAllStudents.pending, (state) => {
            // xử lí trong khi call API
            console.log("Đang call API");
            state.isLoading = true;
        }).addCase(getAllStudents.fulfilled, (state, action) => {
            console.log("Call API thành công");
            console.log(action.payload);
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getAllStudents.rejected, (state, action) => {
            console.log("Call API thất bại");
            console.log(action);
            state.isLoading = false;
        });

        // Thêm
        builder.addCase(createStudent.pending, (state) => {
            console.log("Đang call API");
            state.isLoading = true;
        }).addCase(createStudent.fulfilled, (state, action) => {
            console.log("Call API thành công");
            state.isLoading = false;
            const newStudent = action.payload;
            state.data.push(newStudent);
        }).addCase(createStudent.rejected, (state, action) => {
            console.log("Call API thất bại");
            state.isLoading = false;
        });

        // Xóa
        builder.addCase(deleteStudent.pending, (state) => {
            console.log("Đang call API");
            state.isLoading = true;
        }).addCase(deleteStudent.fulfilled, (state, action) => {
            console.log("Call API thành công");
            state.isLoading = false;
            state.data = state.data.filter(student => student.id !== action.payload);
        }).addCase(deleteStudent.rejected, (state, action) => {
            console.log("Call API thất bại");
            state.isLoading = false;
        });

        // Sửa
        builder.addCase(editStudent.pending, (state) => {
            console.log("Đang call API");
            state.isLoading = true;
        }).addCase(editStudent.fulfilled, (state, action) => {
            console.log("Call API thành công");
            state.isLoading = false;
            const updatedStudent = action.payload;
            state.data = state.data.map(student =>
                student.id === updatedStudent.id ? updatedStudent : student
            );
        }).addCase(editStudent.rejected, (state, action) => {
            console.log("Call API thất bại");
            state.isLoading = false;
        });
    },
});

export const { reducer } = studentSlice;
