<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON Blog Data</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            // Initialize
            $('#userInfo').hide();
            $('#postList').hide();

            // Event handler for form submission
            $('#userForm').submit(function(event) {
                event.preventDefault();
                const userId = $('#userId').val();
                fetchUserDetails(userId);
            });

            // Event handler for showing comments
            $('#postList').on('click', '.show-comments', function() {
                const postId = $(this).data('post-id');
                const commentsContainer = $(this).parent().find('.comments-container');
                if (!commentsContainer.length) {
                    $(this).parent().append('<div class="comments-container"></div>');
                    fetchComments(postId, $(this).parent().find('.comments-container'));
                } else {
                    commentsContainer.toggle();
                }
            });
        });

        // Fetch user details
        function fetchUserDetails(userId) {
            $.ajax({
                url: `http://jsonplaceholder.typicode.com/users/${userId}`,
                method: 'GET',
                success: function(user) {
                    displayUserInfo(user);
                    fetchUserPosts(userId);
                },
                error: function() {
                    alert('User not found.');
                }
            });
        }

        // Display user details
        function displayUserInfo(user) {
            $('#userName').text(user.name);
            $('#userEmail').text(user.email);
            $('#userAddress').text(`${user.address.street}, ${user.address.city}`);
            $('#userInfo').show();
        }

        // Fetch user posts
        function fetchUserPosts(userId) {
            $.ajax({
                url: `http://jsonplaceholder.typicode.com/posts?userId=${userId}`,
                method: 'GET',
                success: function(posts) {
                    displayUserPosts(posts);
                },
                error: function() {
                    alert('Failed to fetch posts.');
                }
            });
        }

        // Display user posts
        function displayUserPosts(posts) {
            const postList = $('#postList');
            postList.empty();
            $.each(posts, function(index, post) {
                const listItem = $(`<li>${post.title} <button class="show-comments" data-post-id="${post.id}">Show Comments</button></li>`);
                postList.append(listItem);
            });
            $('#postList').show();
        }

        // Fetch comments for a post
        function fetchComments(postId, commentsContainer) {
            $.ajax({
                url: `http://jsonplaceholder.typicode.com/comments?postId=${postId}`,
                method: 'GET',
                success: function(comments) {
                    $.each(comments, function(index, comment) {
                        commentsContainer.append(`<p>${comment.body}</p>`);
                    });
                },
                error: function() {
                    alert('Failed to fetch comments.');
                }
            });
        }
    </script>
</head>
<body>
    <h1>JSON Blog Data</h1>
    <form id="userForm">
        <label for="userId">Enter User ID:</label>
        <input type="text" id="userId" name="userId" required>
        <input type="submit" value="Submit">
    </form>
    <div id="userInfo">
        <h2>User Details</h2>
        <p><strong>Name:</strong> <span id="userName"></span></p>
        <p><strong>Email:</strong> <span id="userEmail"></span></p>
        <p><strong>Address:</strong> <span id="userAddress"></span></p>
    </div>
    <ul id="postList"></ul>
</body>
</html>
