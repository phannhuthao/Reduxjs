import { Button, Container, Form, Modal, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { StateType } from '../interface'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Book = () => {

    // hiển thị:
    // B1: lấy dữ liệu store - sử dụng hook useSelector()
    const books = useSelector((state: StateType)=>state.book)
    const [IsOpen, setIsOpen] = useState(false)
    // const [setBook,  ]
    // const onchange = (e : React.ChangeEvent<HTMLInputElement>)=> {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setBook({...Book, [name]: value})

    // }

    // B2: dùng map để hiển thị


    return (
        <>
            <div>
                <Container className="text-center">
                    <h1 className="mb-4">Quản lý sản phẩm</h1>
                    <Button
                        variant="primary"
                        className="mb-4"
                        onClick={()=> setIsOpen(true)}

                    >
                        Thêm mới sản phẩm
                    </Button>
                    <div className="mb-4 ">
                        <Form.Select

                        >
                            <option value="all">Tất cả</option>
                            <option value="returned">Đã trả</option>
                            <option value="notReturned">Chưa trả</option>
                        </Form.Select>
                    </div>
                    <Table striped bordered hover className="mx-auto">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Sách</th>
                                <th>Giá</th>
                                <th>Tên tác giả</th>
                                <th>Trạng thái</th>
                                <th colSpan={2}>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index)=>
                            <tr key={book.bookId} >
                            <td>{index+1}</td>
                            <td>{book.bookName}</td>
                            <td>{book.bookPrice}$</td>
                            <td>{book.author}</td>
                            <td>{book.status}</td>
                            <td>
                                <Form.Select
                                    className="bg-success text-white"
                                >
                                    <option value="true">Đã trả</option>
                                    <option value="false">Chưa mượn</option>
                                </Form.Select>
                            </td>
                            <td>
                            
                                <Button
                                    variant="danger"
                                    className="me-2">
                                    Xóa
                                </Button>


                                <Button variant="warning">
                                    Sửa
                                </Button>
                            </td>
                        </tr>)}
                            

                        </tbody>
                    </Table>
                    <Modal show={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Thêm mới sản phẩm
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tên</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Giá tiền</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập URL hình ảnh"

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nội dung</Form.Label>
                                    <Form.Control
                                        type="date"

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Thể loại</Form.Label>
                                    <Form.Control
                                        type="date"

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tác giả</Form.Label>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" >
                                Đóng
                            </Button>
                            <Button variant="primary" >
                                Thêm mới sản phẩm
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </div>
        </>
    )
}

export default Book
