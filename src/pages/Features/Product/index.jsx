import { Table, Modal, Input, AutoComplete, Button, Drawer, Form} from "antd";
import { useEffect, useState } from "react";
import { IMAGES } from "../../../assets/images";
import { toast } from "react-toastify";
import AddProducts from "../AddProduct";
import UpdateProducts from "../UpdateProduct";
import { NavLink } from "react-router-dom";

function Product() {
  // const [isModalvisible, setIsModalvisible] = useState(false);
  const [img, setimg] = useState("");
  const data = [
    {
      key: 1,
      name: `Xe Số Dream`,
      img: IMAGES.imgProduct1,
      quantity: 5,
      price: `12.000.000`,
      description:
        "Honda Dream hãy để nó đưa bạn đến nơi mà bạn và crush được ở bên nhau.",
    },
    {
      key: 2,
      name: `Xe Số Wave Alpha 110cc`,
      img: IMAGES.imgProduct2,
      quantity: 10,
      price: `7.000.000`,
      description:
        "Wave Alpha 110cc phiên bản 2020 trẻ trung và cá tính với thiết kế bộ tem mới, tạo những điểm nhấn ấn tượng, thu hút ánh nhìn, cho bạn tự tin ghi lại dấu ấn cùng bạn bè của mình trên mọi hành trình.",
    },
    {
      key: 3,
      name: `Xe Số Blade 110`,
      img: IMAGES.imgProduct3,
      quantity: 12,
      price: `9.000.000`,
      description:
        "Với tem xe mới, Blade mang một diện mạo đầy mạnh mẽ, khỏe khoắn, tạo nên phong cách thể thao và năng động cho người lái.",
    },
    {
      key: 4,
      name: `Xe Số Future 125 FI`,
      img: IMAGES.imgProduct4,
      quantity: 7,
      price: `12.000.000`,
      description:
        "Honda Future 125 FI với thiết kế trẻ trung, lịch lãm và hiện đại được bổ sung màu mới, tạo những điểm nhấn ấn tượng, thu hút mọi ánh nhìn. Cùng với vị thế là mẫu xe số cao cấp hàng đầu phân khúc tại Việt Nam, Future 125 FI cho bạn tự tin thể hiện phong cách, phẩm chất của mình trên mọi hành trình.",
    },
    // {
    //   key: 5,
    //   name: `Xe Số Super Cub C125`,
    //   img: IMAGES.imgProduct5,
    //   quantity: 12,
    //   price: `50.000.000`,
    //   description: "Thiết kế cổ điển, thanh lịch đậm chất Super CUB",
    // },
    // {
    //   key: 6,
    //   name: `Xe Số Wave RSX FI 110`,
    //   img: IMAGES.imgProduct6,
    //   quantity: 6,
    //   price: `13.000.000`,
    //   description:
    //     "Wave RSX Fi 110 mang diện mạo hoàn toàn mới, với thiết kế thể thao đặc trưng vốn có, nay mạnh mẽ và khỏe khoắn hơn, phù hợp phong cách của các bạn trẻ.",
    // },
    // {
    //   key: 7,
    //   name: `Xe Tay Ga Vision`,
    //   img: IMAGES.imgProduct7,
    //   quantity: 10,
    //   price: `22.000.000`,
    //   description:
    //     "Thuộc phân khúc xe tay ga giá thấp, Vision luôn là mẫu xe được ưa chuộng trong giới trẻ và có số lượng bán ra lớn nhất tại thị trường Việt Nam suốt nhiều năm qua nhờ kiểu dáng trẻ trung, thanh lịch và nhỏ gọn. Sau 6 năm kể từ lần thay đổi lớn gần nhất vào năm 2014, chiếc xe Vision 2020 đã được nâng cấp toàn diện cả về kiểu dáng thời trang cùng những tiện ích và công nghệ hiện đại, hứa hẹn mang đến những trải nghiệm vượt xa kỳ vọng cho những người trẻ năng động và luôn dẫn đầu xu hướng.",
    // },
    // {
    //   key: 8,
    //   name: `Xe Tay Ga Sh Mode 125cc`,
    //   img: IMAGES.imgProduct8,
    //   quantity: 11,
    //   price: `40.000.000`,
    //   description:
    //     "Thuộc phân khúc xe ga cao cấp và thừa hưởng thiết kế sang trọng nổi tiếng của dòng xe SH, Sh mode luôn được đánh giá cao nhờ kiểu dáng sang trọng, tinh tế tới từng đường nét, động cơ tiên tiến và các tiện nghi cao cấp xứng tầm phong cách sống thời thượng, đẳng cấp.",
    // },
    // {
    //   key: 9,
    //   name: `Xe Tay Ga LEAD 125cc`,
    //   img: IMAGES.imgProduct9,
    //   quantity: 13,
    //   price: `25.000.000`,
    //   description:
    //     "Kế thừa ngôn ngữ thiết kế hiện đại cùng nhiều tiện ích vượt trội vốn có, xe LEAD 125cc mới nay được nâng tầm với động cơ thế hệ mới nhất của Honda eSP+ như trên các mẫu xe ga cao cấp, màu sắc mới hợp xu hướng, cổng sạc tiện lợi, thiết kế phía trước tinh tế, tem xe nổi bật giúp nâng tầm phong cách và tối đa trải nghiệm lái xe cho người sở hữu.",
    // },
    // {
    //   key: 10,
    //   name: `Xe Tay Ga SH350i`,
    //   img: IMAGES.imgProduct10,
    //   quantity: 14,
    //   price: `100.000.000`,
    //   description:
    //     "Trải qua hành trình hơn 37 năm phát triển từ mẫu xe đầu tiên SH50 vào năm 1984 cho đến các phiên bản cao cấp hơn như SH125/150, SH300i, dòng xe SH của Honda đã và đang trở thành sự lựa chọn tối ưu của khách hàng trên toàn thế giới. Tại Việt Nam, hình ảnh mẫu xe SH từ lâu đã trở thành biểu tượng cho tính đẳng cấp, sang trọng và sự hoàn hảo. Kế thừa những nét đặc trưng đó, mẫu xe SH350i mới tiếp tục gây ấn tượng mạnh mẽ với vẻ đẹp đậm chất hiện đại công nghệ và “bề thề”. Được cải tiến và nâng cấp toàn bộ từ thiết kế, động cơ, công nghệ và trang bị tiện nghi, SH350i phô diễn được sức mạnh và sự năng động khi di chuyển, xứng đáng với vị trí ông hoàng trong phân khúc xe tay ga cao cấp tại Việt Nam. Bằng việc ra mắt phiên bản thể thao, ngoài sự sang trọng vốn có, mẫu xe SH350i hoàn toàn mới còn đem đến sự trẻ trung, năng động cho người sở hữu.",
    // },
    // {
    //   key: 11,
    //   name: `Xe Tay Ga SH125i/150i`,
    //   img: IMAGES.imgProduct11,
    //   quantity: 32,
    //   price: `50.000.000`,
    //   description:
    //     "Kế thừa tinh hoa của dòng xe SH với những đường nét thanh lịch, sang trọng mang hơi thở Châu Âu cùng động cơ cải tiến đột phá và công nghệ tiên tiến, SH125i/150i mới bổ sung màu mới ấn tượng và nổi bật.",
    // },
    // {
    //   key: 12,
    //   name: `Xe Tay Ga Air Blade 125/150`,
    //   img: IMAGES.imgProduct12,
    //   quantity: 32,
    //   price: `30.000.000`,
    //   description: "Air Blade 125/150 (Phiên bản Giới hạn)",
    // },
    // {
    //   key: 13,
    //   name: `Xe Tay Côn Winner X`,
    //   img: IMAGES.imgProduct13,
    //   quantity: 22,
    //   price: `42.000.000`,
    //   description:
    //     "Cuộc đời là một cuộc phiêu lưu tràn đầy những điều bất ngờ và mỗi người đều có một vạch đích của riêng mình. Hãy tự tin tạo những cú kích để vút xa và tạo dấu ấn riêng biệt cùng Honda WINNER X mới. Đánh dấu sự chuyển mình mạnh mẽ hướng tới hình ảnh một mẫu siêu xe thể thao cỡ nhỏ hàng đầu tại Việt Nam cùng những trang bị hiện đại và tối tân, WINNER X mới sẵn sàng cùng các tay lái bứt tốc trên mọi hành trình khám phá.",
    // },
    // {
    //   key: 14,
    //   name: `Xe Tay Côn CBR150R`,
    //   img: IMAGES.imgProduct14,
    //   quantity: 12,
    //   price: `62.000.000`,
    //   description:
    //     "THỂ THAO - LINH HOẠT Tự hào mang trong mình tinh thần mô tô thể thao đặc trưng thương hiệu Honda, CBR150R hoàn toàn mới lần đầu tiên được giới thiệu tại Việt Nam như câu trả lời cho những ai đang tìm kiếm sự cân bằng trong cuộc sống năng động. Tính thể thao và linh hoạt của CBR150R xứng danh chiến hữu đích thực giúp bạn thể hiện cá tính và sẵn sàng chinh phục nhịp sống đa nhiệm của đô thị.",
    // },
    // {
    //   key: 15,
    //   name: `Xe Mô Tô Rebel 1100`,
    //   img: IMAGES.imgProduct15,
    //   quantity: 9,
    //   price: `430.000.000`,
    //   description:
    //     "Bạn đã sẵn sàng để nâng tầm trải nghiệm cho những chuyến đi sắp tới của mình? Vậy thì đây chính là thời điểm. Thời điểm cho sự đổi mới vượt lên những quy chuẩn thông thường. Thời điểm cho Rebel 1100. Một chiếc xe phân khối lớn với kiểu dáng phong trần, mang đậm hình bóng của mẫu xe bobber hoài cổ, nhưng vẫn được kết hợp hài hòa cùng những chi tiết đương đại. Bên cạnh nét tinh tế về thiết kế, đây còn là một chiếc xe linh hoạt, thuận tiện và dễ dàng để di chuyển trên những cung đường đại lộ. Hơn thế nữa, Rebel 1100 mang trong mình nhiều sự cải tiến về công nghệ, tiện ích, để đưa đến trải nghiệm thật khác biệt cho người cầm lái.",
    // },
    // {
    //   key: 16,
    //   name: `Xe Mô Tô  Gold Wing`,
    //   img: IMAGES.imgProduct16,
    //   quantity: 2,
    //   price: `1.200.000.000`,
    //   description:
    //     "Với động cơ hiệu suất tuyệt đỉnh, vẻ ngoài sang trọng phù hợp cả những ngả đường trong thành phố và những chuyến đi xa, Gold Wing được mệnh danh là dòng xe touring cao cấp và mang tính biểu tượng của Honda.",
    // },
    // {
    //   key: 17,
    //   name: `Xe Mô Tô CBR500R 2021`,
    //   img: IMAGES.imgProduct17,
    //   quantity: 3,
    //   price: `168.000.000`,
    //   description:
    //     "ĐẬM NÉT THỂ THAO CẢM HỨNG TỪ FIREBLADE Mẫu CBR500R được thiết kế lấy cảm hứng từ mẫu xe đàn anh CBR1000RR Fireblade. Với một ngoại hình xe sắc nét và mạnh mẽ, cùng tính khí động học được tối ưu hoá. Sức mạnh động cơ tập trung ở dải vòng tua thấp và vừa, mẫu CBR500R giúp giải phóng bạn khỏi mọi ràng buộc - hãy trở thành 1 biker mà bạn hằng mơ ước",
    // },
    // {
    //   key: 18,
    //   name: `Xe Mô Tô CB500X 2021`,
    //   img: IMAGES.imgProduct18,
    //   quantity: 4,
    //   price: `160.000.000`,
    //   description:
    //     "Tự do, phóng khoáng nhưng không kém phần mạnh mẽ, CB500X chính là bạn đồng hành vững chãi của bạn cho bước đầu chinh phục niềm đam mê khám phá trên những cung đường đầy bất ngờ.",
    // },
    // {
    //   key: 19,
    //   name: `Xe Mô Tô CB500F 2021`,
    //   img: IMAGES.imgProduct19,
    //   quantity: 5,
    //   price: `150.000.000`,
    //   description:
    //     "TIẾN VỀ PHÍA TRƯỚC Cùng sức mạnh thoả mãn mọi yêu cầu Với khối động cơ mới được tinh chỉnh, đáp ứng tiêu chuẩn khí thải EURO5, cùng với việc duy trì sức mạnh động cơ với mô men xoắn cao cùng công suất tối đa mạnh mẽ, kết hợp cùng hộp số 6 cấp mượt mà đáp ứng hoàn hảo từ những cú đề pa vượt trội cho tới khả năng vận hành tuyệt vời tại vòng tua máy lớn: CB500F đem lại một sân chơi mới đầy thách thức cho bạn khám phá và chinh phục.",
    // },
    // {
    //   key: 20,
    //   name: `Xe Mô Tô Rebel 500 2021`,
    //   img: IMAGES.imgProduct20,
    //   quantity: 6,
    //   price: `165.000.000`,
    //   description:
    //     "Đánh dấu cá tính riêng Tự do, phóng khoáng chính là phong cách sống mà Rebel 500 đang hướng đến cho người lái. Phong cách thiết kế tối giản càng làm nổi bật và tăng sức hấp dẫn hút trọn ánh nhìn: khối động cơ 2 xy lanh song song mạnh mẽ được đặt gọn trong bộ khung xe với trọng tâm thấp cho bạn tự do thể hiện chất riêng.",
    // },
    // {
    //   key: 21,
    //   name: `Xe Mô Tô Africa Twin 2021`,
    //   img: IMAGES.imgProduct21,
    //   quantity: 7,
    //   price: `580.000.000`,
    //   description:
    //     "Sinh ra từ những cuộc đua trên sa mạc. Hoàn thiện cho mọi cung đường phiêu lưu Chiếc Africa Twin là một công cụ tuyệt hảo, sinh ra và hoàn thiện trong những điều kiện khắc nghiệt, với khả năng bám đường tối ưu, giúp người lái luôn cảm nhận được tiếp xúc lốp xe với mặt đất, mang lại sự tự tin cho người lái để chinh phục các chuyến hành trình dài.",
    // },
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();
  const [productUrl, setProductUrl] = useState("");

  const [dataSource, setDataSource] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(data));
  },[]);

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
      width: "30%",
      render: (record) => {
        return (
          <>
            <img
                className="action-product"
                onClick={() => showDrawer(record)}
                src={IMAGES.imgView}
                alt="View"
              />
            {/* <NavLink activeClassName="active" to="/home/update"> */}
              <img
                className="action-product"
                onClick={() => {
                  handleEdit(record);
                  setEditingProduct(record);                 
                  form.setFieldsValue({
                    name:record.name,
                    price:record.price,
                    quantity:record.quantity,
                    description:record.description,                   
                    productLink:record.productLink,
                  });
                }}
                src={IMAGES.imgEdit}
                alt="Edit"
              />
            {/* </NavLink> */}
            
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
  const handleFileChange = (e) => {
    var file = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      setimg(fileReader.result);
    };
  };
  // const showModal = () => {
  //   setIsModalvisible(true);
  // };
  // const onCancel = () => {
  //   setIsModalvisible(false);
  // };
  // const onOk = () => {
  //   setIsModalvisible(false);
  // };

  const onFinish = (values) => {
    console.log("a");
    const newProduct = { ...values, img };
    const newdataSource = [...dataSource, newProduct];
    setDataSource(newdataSource);
    const productsLocal = JSON.parse(localStorage.getItem("products"));
    productsLocal.push(newProduct);
    
    toast.success("Submit Success!");
    localStorage.setItem("products", JSON.stringify(productsLocal));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //Read
  const [visible, setVisible] = useState(false);
  const [dataDetail, setDataDetail] = useState("");
  const showDrawer = (e) => {
    setVisible(true);
    setDataDetail(e);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onClose1 = () => {
    setIsEditing(false);
  };
  //Update
  const handleEdit=(item)=>{
    setIsEditing(true);
  };
  const handleImageChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setProductUrl(reader.result);
    };
  };
  const onUpdate = (values) => {
    const newData = dataSource.find((item) => item.key === editingProduct.key);
    newData.name = values.name;
    newData.price = values.price;
    newData.description = values.description;
    newData.quantity = values.quantity;
    newData.img = productUrl ? productUrl : newData.img;
    localStorage.setItem("products", JSON.stringify(dataSource));
    setDataSource(JSON.parse(localStorage.getItem("products")));
    setIsEditing(false);
    toast.success("Update Success");
    console.log(newData);
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
  const onSearch = (e) => {
    let valueSearch = e.target.value.toLowerCase();
    if (e.target.value === "") {
      setDataSource(JSON.parse(localStorage.getItem("products")));
    } else {
      const arrSearch = dataSource.filter((item) => {
        const nameProd = item.name.toLowerCase();
        return nameProd.includes(valueSearch);
      });
      setDataSource(arrSearch);
    }
  };
  return (
    <div className="Product-list">
      <div className="Product-Top">
        <h2 className="Title-dataSource">Products List</h2>
        <AutoComplete
          style={{
            width: 250,
          }}
          className="input-search"
        >
          <Input.Search size="large" placeholder="Search" onChange={onSearch} />
        </AutoComplete>
        <Button  type="primary" >
          <NavLink className="btn-create" activeClassName="active" to="/home/create">
            <img className="btn-img-create" src={IMAGES.imgCreate} alt='create' /> 
            <p className="p-img-create">Create product</p>
          </NavLink>  
        </Button>
        {/* <Modal
          className="manage-modal"
          title="Add Product"
          visible={isModalvisible}
          onCancel={onCancel}
          onOk={onOk}
        > */}
          <AddProducts
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            handleFileChange={handleFileChange}
          />
        {/* </Modal> */}
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        className="Product-table"
        onChange={onFilterName}
      ></Table>
      <Modal
        title="Edit Product"
        visible={isEditing}
        okText="Save"
        onCancel={onClose1}
        footer={null}
      >
        <UpdateProducts
          onUpdate={onUpdate}
          form={form}
          handleImageChange={handleImageChange}
        />
      </Modal>
      <Drawer
        title="--- View Products ---"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="view-product">
          <img src={dataDetail.img} alt=""/>
          <p>Name: <span>{dataDetail.name}</span></p>
          <p>Quantity: <span>{dataDetail.quantity}</span></p>
          <p>Price: <span>{dataDetail.price}</span></p>
          <p>Description: <span>{dataDetail.description}</span></p>
        </div>     
      </Drawer>
    </div>
  );
}

export default Product;
