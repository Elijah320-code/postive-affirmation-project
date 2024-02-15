$(document).ready(function() {
    const affirmations = [
        "You are loved and appreciated.",
        "Happiness flows from you like a river of joy.",
        "You are a positive being, with endless potential.",
        "You are worthy of love and happiness.",
        "Every day is a fresh start and a new beginning.",
        "You bring positivity and peace into the spaces you inhabit.",
        "Love surrounds you, and comfort is within you."
    ];

    // Set up the draggable functionality
    $('#affirmationCard').draggable({
        containment: "body",
        scroll: false,
        start: function() {
            $(this).css({
                transform: "none", // Reset transform for accurate positioning
                transition: "none" // Disable transition during drag
            });
        }
    });

    $('#nextAffirmation').click(function() {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        $('#affirmationText').text(affirmations[randomIndex]);

        // Optional: animate the card when the affirmation changes
        $('#affirmationCard').effect('shake', {
            times: 2,
            distance: 10,
            direction: 'up'
        });
    });

    // Trigger the first affirmation on load
    $('#nextAffirmation').click();
});
