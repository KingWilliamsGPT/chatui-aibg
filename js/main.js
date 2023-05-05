

function post_comment(e, form) {

}

function User(name, profile_pic, is_super, page_info) {
	this.make_post = function (txt, time) {
	    var t = `
	    <div class='side'>
	        <div class="balloon">
	            <p>${txt}</p>
	        </div>
	        <div class="details text-right">
	            <span>${name}</span>
	            <span class='time glyphicon glyphicon-time'>${time}</span>
	        </div>
	    </div>
	    <div class="side">
	        <img src="images/${profile_pic}" alt="" class='img-circle'>
	    </div>`;
	    var e = document.createElement('div');
	    e.classList.add('comment');
	    if (is_super) {
	        e.classList.add("fierce");
	    }
	    e.innerHTML = t;
	    return e;
	}

    this.add_comment = function(txt){
    	var post = this.make_post(txt, new Date().toTimeString().slice(0, 5));
    	page_info.$comment_area.appendChild(post);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    commentInfo = {
        $form: document.querySelector('.post-comment'),
    	$comment_area: document.querySelector('.comments')
    }
    commentInfo.$submit_button = commentInfo.$form.querySelector('.submit');
    commentInfo.$text_input = commentInfo.$form.querySelector('.post-input');

	// commentInfo.$text_input.addEventListener('key', function(){alert('worked')});
	commentInfo.$text_input.onkeypress = function(ev){
		if(ev.key == 'Enter'){
			commentInfo.$submit_button.click();
		}
	}


    user1 = new User('Helen Anderson', 'profile.webp', true, commentInfo)
    user2 = new User('Milecia', 'Milecia.webp', false, commentInfo)

    commentInfo.$form.querySelector('.submit').onclick = function(ev) {
    	var user_text = commentInfo.$text_input.value;
        user1.add_comment(user_text);
        setTimeout(()=>{user2.add_comment(user_text)}, 2000)
    };
})