$(document).ready(function() {
    let gameLost = false;
    let isGameStarted = false;
    let countdownInterval;

    // Store the initial position of the start element
    const startPos = $('#start').position();

    // Function to reset the maze
    function resetMaze() {
        clearInterval(countdownInterval);
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

    // Function to handle countdown
    function startCountdown(seconds) {
        let remaining = seconds;
        $('#status').text(`Sorry, you hit the boundary, resetting in ${remaining} seconds`).css('color', 'red');

        countdownInterval = setInterval(function() {
            remaining--;
            $('#status').text(`Sorry, you hit the boundary, resetting in ${remaining} seconds`).css('color', 'red');

            if (remaining <= 0) {
                clearInterval(countdownInterval);
                resetMaze();
            }
        }, 1000);
    }

    // Handle mouseover on any boundary
    $('.boundary').mouseover(function() {
        if (isGameStarted) {
            $('.boundary').addClass('youlose');
            gameLost = true;
            startCountdown(3);
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
