$(document).ready(function() {
    let gameLost = false;
    let isGameStarted = false;

    // Store the initial position of the start element
    const startPos = $('#start').position();

    // Function to reset the maze
    function resetMaze() {
        $('.boundary').removeClass('youlose');
        $('#status').text('Click the "S" to begin.').css('color', 'black');
        gameLost = false;
        isGameStarted = false;
        $('#start').css({
            top: startPos.top + 'px',
            left: startPos.left + 'px'
        });
        $(document).off('mousemove');
    }

    // Handle mouseover on any boundary
    $('.boundary').mouseover(function() {
        if (isGameStarted) {
            $('.boundary').addClass('youlose');
            $('#status').text('Sorry, you hit the boundary, resetting in 3 seconds').css('color', 'red');
            gameLost = true;

            // Delay the reset by 3 seconds
            setTimeout(resetMaze, 3000);
        }
    });

    // Handle mouseover on the end div
    $('#end').mouseover(function() {
        if (isGameStarted && !gameLost) {
            alert("You win!");
            resetMaze();
        }
    });

    // Handle click on the start div
    $('#start').click(function() {
        // Reset the game state
        resetMaze();
        $('#status').text('Navigate the maze to the "E" without touching the walls.').css('color', 'black');
        isGameStarted = true;

        // Move the "S" element with the mouse
        $(document).on('mousemove', function(event) {
            if (isGameStarted) {
                $('#start').offset({
                    top: event.pageY - $('#start').outerHeight() / 2,
                    left: event.pageX - $('#start').outerWidth() / 2
                });
            }
        });
    });
});
