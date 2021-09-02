import React from "react";
import "./blog.css";
import { Box, Button, Typography, Input, Checkbox,
    InputLabel,
    Select,
} from '@material-ui/core';

const Blog = () =>{
    return(
        <Box>
            <Box className="header">
                <Box className="header-content">
                    <img src="/image/553451.jpg" alt="" />
                    <Button>
                        <Box component="span" >
                            r
                        </Box>
                    </Button>
                </Box>
            </Box>
            <Box className="container">
                <Box className="sidebar">
                    <Box className="blog">

                    </Box>
                </Box>
                <Box className="content">
                    <Box className="title">
                        <Typography variant="h6">Tạo bài đăng mới</Typography>
                        <Box>
                            <Button className="add-button">Tạo mới</Button>
                            <Button className="up-button">Đăng bài</Button>
                        </Box>
                    </Box>
                    <Box className="infor-blog">
                        <Box className="infor">
                            <Box component="p" className="infor-title">Thông tin bài đăng</Box>
                            <Box>
                                <Box component="p">Hiển thị trên HomePage</Box>
                                <Checkbox/>
                                <Button>Lưu nháp</Button>
                            </Box>
                        </Box>
                        <Box className="infor-category">
                            <Box className="category">
                                <InputLabel className="category-title">Danh mục</InputLabel>
                                <Select className="select" name="" id="">
                                    <option  value="">Tất cả</option >
                                    <option  value="">1</option >
                                    <option  value="">2</option >
                                    <option  value="">3</option >
                                </Select>
                            </Box>
                            <Box className="status">
                                <InputLabel className="status-title">Trạng thái</InputLabel>
                                <Box className="status-content">
                                    <Input type="text" value="Bản nháp" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="add-blog">
                        <Box className="blog-content">
                            <Box className="lang">
                                <Button>Tiếng Việt</Button>
                            </Box>
                            <Box className="content-detail">
                                <Box className="left">
                                    <Box className="name-blog-input">
                                        <Box component="p" className="name-blog">Tên bài viết</Box>
                                        <Input type="text" placeholder="Nhập tên bài viết"/>
                                    </Box>
                                    <Box className="name-blog-input">
                                        <Box component="p" className="name-blog">Tên bài viết</Box>
                                        <Input type="text" placeholder="Nhập tên bài viết"/>
                                    </Box>
                                    <Box className="name-blog-input">
                                        <Box component="p" className="name-blog">Tên bài viết</Box>
                                        <Input type="text" placeholder="Nhập tên bài viết"/>
                                    </Box>
                                </Box>
                                <Box className="right">
                                    <Box className="add-image">
                                        <img src="/image/553451.jpg" alt="" />
                                        <Box component="p">
                                            Ảnh cover bài viết
                                        </Box>
                                        <Box>
                                            <Button>
                                                Tải lên
                                            </Button>
                                            {/* <Input type="file" className="custom-file-input" hidden/> */}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default Blog;