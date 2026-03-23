


const scriptsInEvents = {

	async Es_main_menu_Event2_Act1(runtime, localVars)
	{
const style = document.createElement("style");
style.type = "text/css";

style.innerHTML = `
    #customList {
        width: 952px;
        height: 304px;
        background-color: #E0F7FA;
        border: 5px solid #4FC3F7;
        border-radius: 30px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
        padding: 20px;
        font-size: 24px;
        color: #01579B;
        font-family: 'Comic Sans MS', sans-serif;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }

    #customList:hover, #customList:active {
        transform: scale(1.05);
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.15);
        border-color: #0288D1;
    }

    #customList option:hover, #customList option:active {
        background-color: #B3E5FC;
        color: #01579B;
    }

    #customList option:checked {
        background-color: #81D4FA;
        color: #01579B;
    }
`;

document.head.appendChild(style);

const list = document.getElementById(runtime.objects.List.getFirstPickedInstance().inst.id);

list.id = "customList";

list.addEventListener('touchstart', function(event) {
    list.style.transform = "scale(1.05)";
    list.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.15)";
    list.style.borderColor = "#0288D1";
});

list.addEventListener('touchend', function(event) {
    setTimeout(function() {
        list.style.transform = "scale(1)";
        list.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.1)";
        list.style.borderColor = "#4FC3F7";
        list.blur();
    }, 100);
});

	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

