module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/component/productData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const products = [
    {
        id: 1,
        name: "AirMax Runner",
        desc: "Lightweight running shoes with breathable mesh.",
        price: 79.99,
        image: "/A3.jpg",
        varient: "shoes"
    },
    {
        id: 2,
        name: "Trail Trek Pro",
        desc: "Durable shoes for outdoor adventures.",
        price: 89.99,
        image: "/A5.jpg",
        varient: "shoes"
    },
    {
        id: 3,
        name: "StreetFlex Sneakers",
        desc: "Stylish sneakers for everyday wear.",
        price: 74.99,
        image: "/A6.jpg",
        varient: "shoes"
    },
    {
        id: 5,
        name: "PowerStep Trainers",
        desc: "Supportive trainers with extra cushioning.",
        price: 82.5,
        image: "/r4.jpg",
        varient: "shoes"
    },
    {
        id: 6,
        name: "Urban Hike",
        desc: "Rugged design perfect for hikes and city walks.",
        price: 92.0,
        image: "/s1.jpg",
        varient: "shoes"
    },
    {
        id: 7,
        name: "ZoomFly XT",
        desc: "High-speed shoes for running performance.",
        price: 99.99,
        image: "/s2.jpg",
        varient: "shoes"
    },
    {
        id: 8,
        name: "Comfy Steps",
        desc: "Everyday comfort shoes for men and women.",
        price: 59.99,
        image: "/s3.png",
        varient: "shoes"
    },
    {
        id: 9,
        name: "SlipOn Ultra",
        desc: "Easy to wear, perfect for casual days.",
        price: 54.0,
        image: "/s4.jpg",
        varient: "shoes"
    },
    {
        id: 10,
        name: "Thunder Run",
        desc: "High grip, waterproof performance shoes.",
        price: 88.75,
        image: "/t2.jpg",
        varient: "shoes"
    },
    {
        id: 11,
        name: "KickMax",
        desc: "Built for sports with advanced foot support.",
        price: 90.0,
        image: "/t3.jpg",
        varient: "shoes"
    },
    {
        id: 12,
        name: "FlexEdge",
        desc: "Bendable soles for agile movements.",
        price: 79.0,
        image: "/t4.jpg",
        varient: "shoes"
    },
    {
        id: 13,
        name: "Summer Dress",
        desc: "Light and breezy floral summer dress.",
        price: 39.99,
        image: "/women1.avif",
        varient: "cloth"
    },
    {
        id: 14,
        name: "Formal Gown",
        desc: "Elegant black dress for formal events.",
        price: 59.99,
        image: "/women2.avif",
        varient: "cloth"
    },
    {
        id: 15,
        name: "Denim Skirt",
        desc: "Trendy mid-length denim skirt.",
        price: 29.99,
        image: "/women3.avif",
        varient: "cloth"
    },
    {
        id: 16,
        name: "Office Blazer",
        desc: "Professional fit blazer for daily workwear.",
        price: 45.0,
        image: "/women4.webp",
        varient: "cloth"
    },
    {
        id: 17,
        name: "Casual Tee",
        desc: "Comfortable cotton tee for everyday wear.",
        price: 19.99,
        image: "/women5.webp",
        varient: "cloth"
    },
    {
        id: 18,
        name: "High Waist Pants",
        desc: "Slim-fit high-waist trousers for women.",
        price: 34.99,
        image: "/women6.avif",
        varient: "cloth"
    },
    {
        id: 19,
        name: "Winter Coat",
        desc: "Wool-blend coat for cold weather.",
        price: 89.99,
        image: "/women7.avif",
        varient: "cloth"
    },
    {
        id: 20,
        name: "Men's Polo",
        desc: "Classic men’s polo shirt with stretch fit.",
        price: 24.99,
        image: "/men1.webp",
        varient: "men"
    },
    {
        id: 21,
        name: "Formal Shirt",
        desc: "Long sleeve dress shirt for men.",
        price: 29.99,
        image: "/men2.webp",
        varient: "men"
    },
    {
        id: 22,
        name: "Casual Tee",
        desc: "Breathable and soft casual T-shirt.",
        price: 18.5,
        image: "/men3.webp",
        varient: "men"
    },
    {
        id: 23,
        name: "Men's Jeans",
        desc: "Comfort fit jeans with stretch material.",
        price: 34.99,
        image: "/men4.webp",
        varient: "men"
    },
    {
        id: 24,
        name: "Hoodie Jacket",
        desc: "Warm and comfortable pullover hoodie.",
        price: 49.99,
        image: "/men5.webp",
        varient: "men"
    },
    {
        id: 25,
        name: "Sport Shorts",
        desc: "Quick-dry athletic shorts for training.",
        price: 21.99,
        image: "/men6.webp",
        varient: "men"
    },
    {
        id: 26,
        name: "Wrist Wraps",
        desc: "Supportive wrist wraps for lifting.",
        price: 15.0,
        image: "/access1.jpg",
        varient: "accessories"
    },
    {
        id: 27,
        name: "Gym Bottle",
        desc: "1L BPA-free fitness water bottle.",
        price: 12.5,
        image: "/access2.jpg",
        varient: "accessories"
    },
    {
        id: 28,
        name: "Headband Pack",
        desc: "Pack of 3 sweat-resistant headbands.",
        price: 9.99,
        image: "/access3.png",
        varient: "accessories"
    },
    {
        id: 29,
        name: "Training Belt",
        desc: "Leather gym belt for back support.",
        price: 34.99,
        image: "/access4.jpeg",
        varient: "accessories"
    },
    {
        id: 30,
        name: "Ankle Support",
        desc: "Compression ankle sleeves for training.",
        price: 13.99,
        image: "/access5.webp",
        varient: "accessories"
    },
    {
        id: 31,
        name: "Resistance Bands",
        desc: "5 levels of resistance for workouts.",
        price: 22.0,
        image: "/access6.webp",
        varient: "accessories"
    },
    {
        id: 32,
        name: "Jump Rope",
        desc: "Speed jump rope with adjustable length.",
        price: 11.99,
        image: "/access7.webp",
        varient: "accessories"
    },
    {
        id: 33,
        name: "Cotton Shirt",
        desc: "Breathable shirt for training or casual wear.",
        price: 25.99,
        image: "/shirt.jpg",
        varient: "shirt"
    },
    {
        id: 34,
        name: "Training Shorts",
        desc: "Sweat-wicking, breathable gym shorts.",
        price: 19.99,
        image: "/short1.jpg",
        varient: "short"
    },
    {
        id: 35,
        name: "Mesh Shorts",
        desc: "Lightweight mesh shorts with inner lining.",
        price: 22.5,
        image: "/short2.jpg",
        varient: "short"
    },
    {
        id: 36,
        name: "Compression Shorts",
        desc: "Tight-fit shorts for running or gym.",
        price: 17.99,
        image: "/short3.jpg",
        varient: "short"
    },
    {
        id: 37,
        name: "Grip Gloves",
        desc: "Anti-slip gloves for heavy lifting.",
        price: 14.99,
        image: "/handgloove.jpg",
        varient: "gloove"
    },
    {
        id: 38,
        name: "DryFit Shirt",
        desc: "Moisture-wicking shirt for intense workouts.",
        price: 27.99,
        image: "/shirt2.jpg",
        varient: "shirt"
    },
    {
        id: 39,
        name: "Muscle Fit Shirt",
        desc: "Slim-fit shirt that highlights your gains.",
        price: 26.5,
        image: "/shirt1.jpg",
        varient: "shirt"
    }
];
const __TURBOPACK__default__export__ = products;
}}),
"[project]/context/cartContext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$component$2f$productData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/component/productData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function CartProvider({ children }) {
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [products] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$component$2f$productData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const [likedItems, setLikedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        cartItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        likedItems
    ]);
    const likedProduct = (product)=>{
        const alreadyLiked = likedItems.find((item)=>item.id === product.id);
        if (!alreadyLiked) {
            setLikedItem((prev)=>[
                    ...prev,
                    product
                ]);
        }
    };
    const unlikedProduct = (id)=>{
        setLikedItem((prev)=>prev.filter((item)=>item.id !== id));
    };
    const updateQuantity = (id, newQuantity)=>{
        setCartItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    quantity: newQuantity
                } : item));
    };
    const addToCart = (product)=>{
        const existingItem = cartItems.find((item)=>item.id === product.id);
        if (existingItem) {
            setCartItems((prev)=>prev.map((item)=>item.id === product.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item));
        } else {
            setCartItems((prev)=>[
                    ...prev,
                    {
                        ...product,
                        quantity: 1
                    }
                ]);
        }
    };
    const removeFromCart = (id)=>{
        setCartItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const clearCart = ()=>{
        setCartItems([]);
    };
    const toggleCart = ()=>{
        setIsCartOpen((prev)=>!prev);
    };
    const cartCount = cartItems.reduce((total, item)=>total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item)=>total + item.quantity * item.price, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            isCartOpen,
            toggleCart,
            cartCount,
            cartTotal,
            products,
            likedItems,
            likedProduct,
            unlikedProduct,
            updateQuantity
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/cartContext.js",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CartProvider;
const useCart = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
}}),
"[project]/context/authcontext.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const login = async (email, password)=>{
        try {
            const res = await fetch(`${("TURBOPACK compile-time value", "https://fitmuse-backend.onrender.com")}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await res.json();
            console.log("Login Response:", data); // ✅ ADD THIS
            if (res.ok) {
                setUser(data.user);
                setToken(data.token);
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                console.log("✅ Stored token:", data.token); // ✅ ADD THIS
                console.log("✅ Stored user:", data.user); // ✅ ADD THIS
                router.push("/cart");
            } else {
                console.error("❌ Login failed:", data.message); // ✅ ADD THIS
            }
        } catch (err) {
            console.error("❌ Login Error:", err); // ✅ ADD THIS
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const verifyUser = async ()=>{
            const storedToken = localStorage.getItem("token");
            console.log("Stored Token:", storedToken);
            if (!storedToken) {
                console.log("No token found in localStorage.");
                setLoading(false);
                return;
            }
            try {
                const res = await fetch(`${("TURBOPACK compile-time value", "https://fitmuse-backend.onrender.com")}/api/auth/verify-user`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                });
                const data = await res.json();
                console.log("Verify User Response:", data);
                if (res.ok) {
                    setUser(data.user);
                    setToken(storedToken);
                    console.log("✅ User verified and set in context:", data.user);
                } else {
                    console.warn("❌ Invalid token or verification failed.");
                    setUser(null);
                    setToken(null);
                    localStorage.removeItem("token");
                }
            } catch (err) {
                console.error("❌ Error verifying user:", err);
                setUser(null);
                setToken(null);
                localStorage.removeItem("token");
            } finally{
                setLoading(false);
            }
        };
        verifyUser();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            token,
            login,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/context/authcontext.js",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AuthProvider;
const useAuth = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b294a66b._.js.map