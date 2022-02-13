document.addEventListener("DOMContentLoaded", (event) => {
    let toggle = document.getElementById("mobileToggle");
    let mobileMenu = document.getElementById("mobileMenu");
    toggle.onclick = () => {
        if (mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.remove("hidden");
            return 1;
        } 
        mobileMenu.classList.add('hidden');
    }
})

var tab1 = document.getElementById('tab1'),
    tab2 = document.getElementById('tab2'),
    tab3 = document.getElementById('tab3'),
    c1 = document.getElementById('c1'),
    c2 = document.getElementById('c2'),
    c3 = document.getElementById('c3');

function changeTab1() {
    tab1.className = 'px-8 py-2 border bg-emerald-600 rounded-lg selected group text-sm font-semibold w-full flex flex-col items-center text-white text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    tab2.className = 'px-8 py-2 bg-white border text-emerald-600 rounded-lg group text-sm font-semibold w-full flex flex-col items-center text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    tab3.className = 'px-8 py-2 bg-white border text-emerald-600 rounded-lg group text-sm font-semibold w-full flex flex-col items-center text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    c1.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md shadow-emerald-900 h-80'
    c2.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md  shadow-emerald-900 hidden';
    c3.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md  shadow-emerald-900 hidden';
}

function changeTab2() {
    tab1.className = 'px-8 py-2 bg-white border text-emerald-600 rounded-lg group text-sm font-semibold w-full flex flex-col items-center text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    tab2.className = 'px-8 py-2 bg-emerald-600 border rounded-lg selected group text-sm font-semibold w-full flex flex-col items-center text-white text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    tab3.className = 'px-8 py-2 bg-white border text-emerald-600 rounded-lg group text-sm font-semibold w-full flex flex-col items-center text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    c1.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md  shadow-emerald-900 hidden';
    c2.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md shadow-emerald-900 h-80';
    c3.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md  shadow-emerald-900 hidden';
}

function changeTab3() {
    tab1.className = 'px-8 py-2 bg-white border text-emerald-600 rounded-lg group text-sm font-semibold w-full flex flex-col items-center text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    tab2.className = 'px-8 py-2 bg-white border text-emerald-600 rounded-lg group text-sm font-semibold w-full flex flex-col items-center text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    tab3.className = 'px-8 py-2 bg-emerald-600 border rounded-lg selected group text-sm font-semibold w-full flex flex-col items-center text-white text-2xl hover:scale-105 hover:shadow-xl shadow-black';
    c1.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md  shadow-emerald-900 hidden'
    c2.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md  shadow-emerald-900 hidden';
    c3.className = 'bg-gray-50 p-4 rounded-lg bg-emerald-100 shadow-md shadow-emerald-900 h-80';
}