document.addEventListener("DOMContentLoaded", (event) => {
    let bannerToggle = document.getElementById("bannerToggle");
    let eventBanner = document.getElementById("bannerNotification");
    
    bannerToggle.onclick = () => {
        eventBanner.classList.add("hidden");
    }
})

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

document.addEventListener("DOMContentLoaded", (event) => { 
    let scheduleTabOne = document.getElementById('tab1'),
    scheduleTabTwo = document.getElementById('tab2'),
    scheduleTabThree = document.getElementById('tab3'),
    scheduleContentOne = document.getElementById('c1'),
    scheduleContentTwo = document.getElementById('c2'),
    scheduleContentThree = document.getElementById('c3');

    let activeTabClass = "";
    let inactiveTabClass = "";

    let activeContentClass = "";
    let inactiveContentClass = "";

    scheduleTabOne.onclick = () => {
        scheduleTabOne.classList.replace("bg-white", "bg-gray-200");
        scheduleTabOne.classList.replace("after:w-[0%]", "after:w-[100%]");

        scheduleTabTwo.classList.replace("bg-gray-200", "bg-white");
        scheduleTabTwo.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleTabThree.classList.replace("bg-gray-200", "bg-white");
        scheduleTabThree.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleContentOne.classList.replace("hidden", "block");
        scheduleContentTwo.classList.replace("block", "hidden");
        scheduleContentThree.classList.replace("block", "hidden");
    }

    scheduleTabTwo.onclick = () => {
        scheduleTabTwo.classList.replace("bg-white", "bg-gray-200");
        scheduleTabTwo.classList.replace("after:w-[0%]", "after:w-[100%]");

        scheduleTabOne.classList.replace("bg-gray-200", "bg-white");
        scheduleTabOne.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleTabThree.classList.replace("bg-gray-200", "bg-white");
        scheduleTabThree.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleContentTwo.classList.replace("hidden", "block");
        scheduleContentOne.classList.replace("block", "hidden");
        scheduleContentThree.classList.replace("block", "hidden");
    }

    scheduleTabThree.onclick = () => {
        scheduleTabThree.classList.replace("bg-white", "bg-gray-200");
        scheduleTabThree.classList.replace("after:w-[0%]", "after:w-[100%]");

        scheduleTabTwo.classList.replace("bg-gray-200", "bg-white");
        scheduleTabTwo.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleTabOne.classList.replace("bg-gray-200", "bg-white");
        scheduleTabOne.classList.replace("after:w-[100%]", "after:w-[0%]");


        scheduleContentThree.classList.replace("hidden", "block");
        scheduleContentTwo.classList.replace("block", "hidden");
        scheduleContentOne.classList.replace("block", "hidden");
    }
})

const typewriter = document.getElementById("typewriteDesc");

const typewriterScrollObserver = new IntersectionObserver(entires => {
    entires.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('typewriter');
        } else {
            entry.target.classList.remove('typewriter');
        }
    })
})

typewriterScrollObserver.observe(typewriter);
