function getNotificationStatus() {
    if (sessionStorage.getItem("viewedNotification") == "true") {
        return true;
    } 
    return false;
}

document.addEventListener("DOMContentLoaded", event => {
    console.log(sessionStorage.getItem("viewedNotification"))
    if (sessionStorage.getItem("viewedNotification") == null) {
        sessionStorage.setItem("viewedNotification", false);
    }

    let notificationToggle = document.getElementById("notificationToggle");
    let eventBanner = document.getElementById("bannerNotification");

    eventBanner.classList.add("hidden");

    if (!getNotificationStatus()) {
        eventBanner.classList.remove("hidden");
    }

    notificationToggle.onclick = () => {
        sessionStorage.setItem("viewedNotification", true);
        eventBanner.classList.toggle("hidden");
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
        scheduleTabOne.classList.replace("bg-gray-50", "bg-gray-200");
        scheduleTabOne.classList.replace("after:w-[0%]", "after:w-[100%]");

        scheduleTabTwo.classList.replace("bg-gray-200", "bg-gray-50");
        scheduleTabTwo.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleTabThree.classList.replace("bg-gray-200", "bg-gray-50");
        scheduleTabThree.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleContentOne.classList.replace("hidden", "block");
        scheduleContentTwo.classList.replace("block", "hidden");
        scheduleContentThree.classList.replace("block", "hidden");
    }

    scheduleTabTwo.onclick = () => {
        scheduleTabTwo.classList.replace("bg-gray-50", "bg-gray-200");
        scheduleTabTwo.classList.replace("after:w-[0%]", "after:w-[100%]");

        scheduleTabOne.classList.replace("bg-gray-200", "bg-gray-50");
        scheduleTabOne.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleTabThree.classList.replace("bg-gray-200", "bg-gray-50");
        scheduleTabThree.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleContentTwo.classList.replace("hidden", "block");
        scheduleContentOne.classList.replace("block", "hidden");
        scheduleContentThree.classList.replace("block", "hidden");
    }

    scheduleTabThree.onclick = () => {
        scheduleTabThree.classList.replace("bg-gray-50", "bg-gray-200");
        scheduleTabThree.classList.replace("after:w-[0%]", "after:w-[100%]");

        scheduleTabTwo.classList.replace("bg-gray-200", "bg-gray-50");
        scheduleTabTwo.classList.replace("after:w-[100%]", "after:w-[0%]");

        scheduleTabOne.classList.replace("bg-gray-200", "bg-gray-50");
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

function isAtViewportTop(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= 0
    );
}

function differentToViewportTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top;
}



document.addEventListener("scroll", () => {
    let hackDesc = document.getElementById("description");
    let mediaIcons = document.getElementById("mediaIcons");
    let theme = document.querySelectorAll(".theme");
    let cards = document.querySelectorAll(".cards");
    let groups = document.querySelectorAll(".groups");
    let prize = document.querySelectorAll(".prizes-opac");

    theme.forEach(element => {
        console.log(element)
        element.style.opacity = (-differentToViewportTop(element) + 800)* 0.003 ;
    })

    cards.forEach(element => {
        element.style.opacity = (-differentToViewportTop(element) + 350)* 0.004 ;
    })

    groups.forEach(element => {
        element.style.opacity = (-differentToViewportTop(element) + 700)* 0.004;
    })

    prize.forEach(element => {
        element.style.opacity = (-differentToViewportTop(element) + 350)* 0.004;
    })

    // if (isAtViewportTop(hackDesc)) {
    //     theme.classList.replace("hidden", "flex");
    // } else {
    //     theme.classList.replace("flex", "hidden");
    // }
})

document.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");

})

typewriterScrollObserver.observe(typewriter);