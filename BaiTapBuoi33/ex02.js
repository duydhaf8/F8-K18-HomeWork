function getProduct(productId) {
    console.log("Kiểm tra tồn kho...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productId === 1) {
                console.log("Tồn kho hợp lệ");
                resolve({
                    productId: 1,
                    name: "iPhone",
                    price: 20000000,
                    stock: 5
                });
            } else {
                reject("Sản phẩm không tồn tại");
            }
        }, 1000);
    });
}

function processPayment(product) {
    console.log("Đang thanh toán...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Thanh toán thành công");
            resolve({
                orderId: 999,
                productName: product.name,
                status: "SUCCESS"
            });
        }, 1500);
    });
}

function createOrder(paymentInfo) {
    console.log("Đang tạo đơn hàng...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Đặt hàng thành công!");
            resolve(paymentInfo);
        }, 500);
    });
}


getProduct(1)
    .then((product) => {
        return processPayment(product);
    })
    .then((paymentInfo) => {
        return createOrder(paymentInfo);
    })
    .then((finalOrder) => {
        console.log("Order:", finalOrder);
    })
    .catch((error) => {
        console.log("Lỗi:", error);
    });


setTimeout(() => {
    getProduct(2)
        .then((product) => {
            return processPayment(product);
        })
        .then((paymentInfo) => {
            return createOrder(paymentInfo);
        })
        .then((finalOrder) => {
            console.log("Order:", finalOrder);
        })
        .catch((error) => {
            console.log("Lỗi:", error);
        });
}, 4000);