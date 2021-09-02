import React from "react";
import "./blog.css";

const Blog = () =>{
    return(
        <div>
            <div className="header">
                <div className="header-content">
                    <img src="/image/553451.jpg" alt="" />
                    <button>
                        <span>
                            r
                        </span>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="sidebar">
                    <div className="blog">

                    </div>
                </div>
                <div className="content">
                    <div className="title">
                        <h6>Tạo bài đăng mới</h6>
                        <div>
                            <button className="add-button">Tạo mới</button>
                            <button className="up-button">Đăng bài</button>
                        </div>
                    </div>
                    <div className="infor-blog">
                        <div className="infor">
                            <p className="infor-title">Thông tin bài đăng</p>
                            <div>
                                <p>Hiển thị trên HomePage</p>
                                <input type="checkbox"/>
                                <button>Lưu nháp</button>
                            </div>
                        </div>
                        <div className="infor-category">
                            <div className="category">
                                <div className="category-title">Danh mục</div>
                                <select name="" id="">
                                    <option value="">Tất cả</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className="status">
                                <div className="status-title">Trạng thái
                                </div>
                                <div className="status-content">
                                    <input type="text" value="Bản nháp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-blog">
                        <div className="blog-content">
                            <div className="lang">
                                <button>Tiếng Việt</button>
                            </div>
                            <div className="content-detail">
                                <div className="left">
                                    <div className="name-blog-input">
                                        <p className="name-blog">Tên bài viết</p>
                                        <input type="text" placeholder="Nhập tên bài viết"/>
                                    </div>
                                    <div className="name-blog-input">
                                        <p className="name-blog">Mô tả bài viết</p>
                                        <input type="text" placeholder="Nhập mô tả bài viết"/>
                                    </div>
                                    <div className="name-blog-input">
                                        <p className="name-blog">Tên bài viết</p>
                                        <input type="text" placeholder="Nhập tên bài viết"/>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="add-image">
                                        <img src="/image/553451.jpg" alt="" />
                                        <p>
                                            Ảnh cover bài viết
                                        </p>
                                        <div>
                                            <button>
                                                Tải lên
                                            </button>
                                            <input type="file" className="custom-file-input" hidden/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blog;