document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单实际提交

    // 获取表单数据
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // 在这里处理数据，比如发送到服务器（示例代码，实际应用中需要使用 AJAX 或 Fetch API）
    console.log('表单数据:', data);

    // 隐藏表单部分，显示感谢页面
    document.querySelector('.form-section').classList.add('hidden');
    document.getElementById('thankYou').classList.remove('hidden');
});
