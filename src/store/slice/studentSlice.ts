// tạo ra reducer và action

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { Student } from "../../interface";


// tạo ra các action call API : createAsynxThunks
export const getAllStudents: any = createAsyncThunk("students/getAllStudent",async() => {
    // call API ở đây
    let res = await axios.get("http://localhost:9999/student")
    return res.data;

})

// action thêm mới
export const createStudent: any = createAsyncThunk("students/createStudent",async(data: Student)=> {
    // call API thêm mới
    let res = await axios.post("http://localhost:9999/student")
    return res.data;
})
// action thêm sửa
export const editStudent: any = createAsyncThunk("students/editStudent",async(data: Student) => {
    // call API sửa
    let res = await axios.put("http://localhost:9999/student")
    return res.data;
})
// action xóa
export const deleteStudent: any = createAsyncThunk("students/deleteStudent", async(id: number)=> {
   // call API xóa
   const res = await axios.put(`http://localhost:9999/student/${id}`);
   return id;
})
const initialState: Student[] = []

const studentSlice = createSlice({
    name: "student",
    initialState: {
        data: initialState,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Các trạng thái của 1 action thunk: pending, fulfilled ,  rejected
        // pending: kết quả chưa xử lí xong , đang trong quá trình chờ
        // fulfilled: Quá trình thực hiện thành công
        // rejected: Quá trình thất bại
       
        // lấy danh sách
        builder.addCase(getAllStudents.pending, (state, action)=> {
            // xử lí trong khi call API
            console.log("Đang call API");
        }).addCase(getAllStudents.fulfilled, (state , action) => {
            console.log("Call API thành công");
            console.log(action.payload);
            state.isLoading = false,
            state.data = action.payload
        }).addCase(getAllStudents.rejected, (state, action) => {
            console.log("Call API thất bại");
            console.log(action);
        })


        // Thêm
        builder.addCase(createStudent.pending, (state, action)=> {
            console.log("Đang call API");
        }).addCase(createStudent.fulfild, (state, action)=> {
            console.log("Call API thành công");
            state.isLoading = false;
            const newStudent = action.payload as never
        }).addCase(createStudent.rejected,(state, action)=> {
            console.log("Call API thất bại");
        })


        // Xóa
        builder.addCase(deleteStudent.pending,(state, action)=> {
            console.log("Đang call API");
        }).addCase(deleteStudent.fulfild, (state, action)=> {
            console.log("Call API thành công");
            state.isLoading = false;
            state.data = state.data.filter(student => student.id !== action.payload);
        }).addCase(deleteStudent.rejected, (state, action)=> {
            console.log("Call API thất bại");
        })


        // Sửa
        builder.addCase(editStudent.pending, (state, action)=> {
            console.log("Đang call API");
        }).addCase(editStudent.fulfild, (state, action)=> {
            console.log("Call API thành công");
            state.isLoading = false;   
        }).addCase(editStudent.rejected, (state, action)=> {
            console.log("Call API thất bại");
            state.isLoading = false;
        })
    }
})

export const {reducer } = studentSlice