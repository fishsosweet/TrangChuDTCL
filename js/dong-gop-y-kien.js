document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        var formData = new FormData(this);
        var commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        var commentInfo = `
            <p><strong>Họ và Tên:</strong> ${formData.get('name')}</p>
            <p><strong>Email:</strong> ${formData.get('email')}</p>
            <p><strong>Số Điện Thoại:</strong> ${formData.get('phone')}</p>
            <p><strong>Ý Kiến:</strong> ${formData.get('comment')}</p>
        `;
        commentElement.innerHTML = commentInfo;
        document.getElementById('comments').appendChild(commentElement);
        this.reset();
    }
});
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var comment = document.getElementById('comment').value.trim();
    if (name === '' || email === '' || phone === '' || comment === '') {
        alert('Vui lòng điền đầy đủ thông tin');
        return false;
    }
    else{
    alert('Chúng tôi đã ghi nhận lại ý kiến!')
    return true;
    }
}