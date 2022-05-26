import { Table, Modal, Input, AutoComplete, Button } from "antd";
import { useState } from "react";
import { IMAGES } from "../../../assets/images";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import ProductForm from "../../../components/modules/ProductForm";

function Product() {
  
  const listProduct = JSON.parse(localStorage.getItem("products"));
  const [dataSource, setDataSource] = useState(listProduct);

  localStorage.setItem("products", JSON.stringify(dataSource));
  const newData = {};
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
      editable: true,
      filters: [
        {
          text: "Xe Số",
          value: "Xe Số",
        },
        {
          text: "Xe Tay Ga",
          value: "Xe Tay Ga",
        },
        {
          text: "Xe Tay Côn",
          value: "Xe Tay Côn",
        },
        {
          text: "Xe Mô Tô",
          value: "Xe Mô Tô",
        },
      ],
      filterMode: "tree",
      onFilter: (value, record) => record.name.startsWith(value),
    },
    {
      title: "Images",
      dataIndex: "img",
      width: "20%",
      render: (img) => <img className="product-img" src={img} alt="" />,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: "7%",
      editable: true,
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "10%",
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "30%",
      editable: true,
    },
    {
      title: "Actions",
      width: "10%",
      render: (record) => {
        return (
          <>
            <NavLink activeClassName="active" to={`/home/${record.key}`}>
              <img className="action-product" src={IMAGES.imgView} alt="View" />
            </NavLink>
            <NavLink activeClassName="active" to={`/home/${record.key}/update`}>
              <img className="action-product" src={IMAGES.imgEdit} alt="Edit" />
            </NavLink>
            <img
              className="action-product"
              onClick={() => {
                onDeleteProduct(record);
              }}
              src={IMAGES.imgDelete}
              alt="Delete"
            />
          </>
        );
      },
    },
  ];

  //Create
  const [isModalvisible, setIsModalvisible] = useState(false);
  const [img, setimg] = useState("");

  const handleFileChange = (e) => {
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setimg(fileReader.result);
    };
  };
  const showModal = () => {
    setIsModalvisible(true);
  };
  const onCancel = () => {
    setIsModalvisible(false);
  };
  const onOk = () => {
    setIsModalvisible(false);
  };

  const handleOnSubmit = (values) => {
    const index = parseInt(dataSource[dataSource.length - 1].key) + 1;
    console.log(index);
    const newProduct = { ...values, img, key: index };
    const newdataSource = [...dataSource, newProduct];
    setDataSource(newdataSource);
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    setIsModalvisible(false);
    toast.success("Submit Success!");
    localStorage.setItem("products", JSON.stringify(productsLocal));
  };

  //Delete
  const onDeleteProduct = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this product record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        localStorage.removeItem("products");
        localStorage.setItem(
          "products",
          JSON.stringify(dataSource.filter((prod) => prod.key !== record.key))
        );
        setDataSource(dataSource.filter((prod) => prod.key !== record.key));
        toast.success("Delete Success");
      },
    });
  };
  //filter
  function onFilterName(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  //search
  const [search, setSearch] = useState("");
  const keyNames = ["name"];
  const queryName = (dataSource) => {
    return dataSource.filter((item) =>
      keyNames.some((key) =>
        item[key].toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  return (
    <div className="Product-list">
      <div className="Product-Top">
        <div className="Top-title">
          <h2 className="Title-dataSource">Products List</h2>
          <AutoComplete
            style={{
              width: 200,
            }}
            className="input-search"
          >
            <Input.Search size="large" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
          </AutoComplete>
        </div>
        <Button className="btn-create" type="primary" onClick={showModal}>
          <img className="btn-img-create" src={IMAGES.imgCreate} alt="create" />
          <p className="p-img-create">Create product</p>
        </Button>
        <Modal
          title={null}
          footer={null}
          visible={isModalvisible}
          onCancel={onCancel}
          onOk={onOk}
          className="manage-modal"
        >
          <div className="section-create-product">
            <div className="container create-product">
              <h3 className="title-create-product">Create Product</h3>
              <ProductForm
                onFinish={handleOnSubmit}
                nameBtn="Submit"
                onChange={handleFileChange}
                newData={newData}
                formName="form-add-product"
              />
            </div>
          </div>
        </Modal>
      </div>
      <Table
        columns={columns}
        dataSource={queryName(dataSource)}
        className="Product-table"
        onChange={onFilterName}
      ></Table>
    </div>
  );
}

export default Product;
