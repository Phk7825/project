<!DOCTYPE html>
<html>
<head>
  <title>Tooltip Example</title>
  <!-- Tooltip.js CDN -->
  <link rel="stylesheet" href="https://unpkg.com/tippy.js@6.3.4/dist/tippy.css">
  <script src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.js"></script>
  <script src="https://unpkg.com/tippy.js@6.3.4/dist/tippy-bundle.umd.min.js"></script>
</head>
<body>
  <div class="js-registration" data-tippy-content="John Doe" worker-name="John Doe">Hover over me</div>

  <script>
    tippy('.js-registration', {
      placement: 'top'
    });
  </script>
</body>
</html>