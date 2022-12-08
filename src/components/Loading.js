import '../styles/Loading.css';

function Loading() {

    // let icon = document.getElementById('icon');

    // icon.addEventListener('hover', function () {
    //     icon.classList.toggle('hidden');
    // }, false);

    return (
        <div class="logobox">
	        <div class="icon fade-out">SW</div>
	        <div class="text">
		    Sam Wallace
	    </div>	
	    <div class="border bottomleft"></div>
	    <div class="border bottomright"></div>
	    <div class="border left"></div>
	    <div class="border right"></div>
	    <div class="border topleft"></div>
	    <div class="border topright"></div>
    </div>
    );
}

export default Loading;