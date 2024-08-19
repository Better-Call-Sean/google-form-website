document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为
        // 提交表单
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        }).then(() => {
            // 重定向到自定义的感谢页面
            window.location.href = 'thank-you.html';
        });
    });
});
