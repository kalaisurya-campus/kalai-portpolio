import React, { useEffect, useState } from "react";
import { auth, fs } from "../../firebasefiles";
import Navbar from "../navbar/Navbar";
import Product from "../productlist/Product";

function HomePage(props) {
    const GetUserUid = () => {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged((users) => {
                console.log(users);
                if (users) {
                    setUid(users.uid);
                }
            });
        }, []);
        return uid;
    };
    const uid = GetUserUid();
    console.log("heiht", uid);

    const GetCurrentDataUser = () => {
        const [user, SetUser] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged((user) => {
                if (user) {
                    fs.collection("users")
                        .doc(user.uid)
                        .get()
                        .then((snapshot) => {
                            SetUser(snapshot.data().Username);
                        });
                } else {
                    SetUser(null);
                }
            });
        }, []);
        return user;
    };

    const user = GetCurrentDataUser();
    console.log("username", user);

    const [products, setProducts] = useState([]);

    // getting products function
    const getProducts = async () => {
        const products = await fs.collection("Products").get();
        const productsArray = [];
        for (var snap of products.docs) {
            var data = snap.data();
            data.ID = snap.id;
            productsArray.push({
                ...data,
            });
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        }
    };
    let DataProduct;
    const addToCart = (product) => {
        console.log(product, "set data fields");
        if (uid !== null) {
            console.log(product);
            DataProduct = product;
            DataProduct["qty"] = 1;
            DataProduct["TotalProductPrice"] =
                DataProduct.qty * DataProduct.price;
            fs.collection("Carts " + uid)
                .doc(product.ID)
                .set(DataProduct)
                .then(() => {
                    console.log("successfully added to cart");
                })
                .catch((err) => {
                    console.log(err, "err data");
                });
        } else {
            props.history.push("/login");
        }
    };
 

    useEffect(() => {
        getProducts();
    }, []);
   
    return (
        <div>
            <Navbar user={user} />
            {/* <Product /> */}
            {products.length > 0 && (
                <div className="container-fluid">
                    <h1 className="text-center">Products</h1>
                    <div className="products-box">
                        <Product products={products} addToCart={addToCart} />
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className="container-fluid">Please wait....</div>
            )}
        </div>
    );
}

export default HomePage;
