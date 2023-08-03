<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Submit Post</title>
</head>
<body>
    <form id="submitForm" action="save_post.jsp" method="post">
        <textarea id="textContent" name="content" style="display: none;"></textarea>
        <input type="file" id="imageInput" name="image" style="display: none;">
    </form>

    <script>
        function submitPost() {
            let textContent = document.getElementById("textContent");
            let contentDiv = document.querySelector(".js-upload-area");

            textContent.value = contentDiv.innerHTML;
            document.getElementById("submitForm").submit();
        }
    </script>
    
    <!-- 기존 'Image Drag and Drop' 코드 -->
</body>
</html>
