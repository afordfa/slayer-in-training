use slayer_db;


INSERT INTO Users (name, fbId, createdAt, updatedAt)
VALUES 
("Buffy Summers", "1412524523452345", NOW(), NOW()),
("Rupert Giles", "7597890245039390", NOW(), NOW()),
("Willow Rosenberg", "8574967463856763", NOW(), NOW()),
("Xander Harris", "7563856341950774", NOW(), NOW());



INSERT INTO trackers 


SET distance = "1 mile",
minutes = 8,
seconds = 42,
date = "2017-06-15",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 1);
  


INSERT INTO trackers 


SET distance = "2 miles",
minutes = 12,
seconds = 15,
date = "2017-06-16",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 1);
  



INSERT INTO trackers 


SET distance = "5K",
minutes = 22,
seconds = 06,
date = "2017-06-17",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 1);





INSERT INTO trackers 


SET distance = "10K",
minutes = 40,
seconds = 57,
date = "2017-06-17",
createdAt = NOW(),
updatedAt = NOW(),
UserId =  (SELECT id FROM users
  WHERE id = 3);

  
  
  select * from Trackers;



  

INSERT INTO Exercises (title, minutes, tags, focus, createdAt, updatedAt)
VALUES 
("5 Sun Salutations", 7, "Mobility, Endurance, Strength, Buffy", "arms, core, legs", NOW(), NOW()),
("Standing Baby Cradle Stretch, Left/Right",  2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Hamstring Stretch/Reverse Lunge Left/Right", 2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Standing Wide-Leg Forward Fold", 1, "Mobility, Buffy", "legs", NOW(), NOW()),
("Seated One Leg Forward Fold Left/Right", 2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Standing Quad Stretch Left/Right", 2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Lunge with Quad Stretch Left/Right", 2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Seated Butterfly Stretch", 1, "Mobility, Buffy", "legs", NOW(), NOW()),
("Pigeon Pose Hip Stretch Left/Right", 2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Lizard Pose Hip Stretch Left/Right", 2, "Mobility, Buffy", "legs", NOW(), NOW()),
("Wall Clock Shoulder Stretch Left/Right", 2, "Mobility, Buffy", "arms", NOW(), NOW()),
("Eagle Arms Left/Right", 1, "Mobility, Buffy", "arms", NOW(), NOW()),
("Over the Head Tricep Stretch Left/Right", 1, "Mobility, Buffy", "arms", NOW(), NOW()),
("Hand Clasped Behind Back Shoulder Stretch", 1, "Mobility, Buffy", "arms", NOW(), NOW()),
("Tai Qi Arm Swings", 1, "Mobility, Buffy", "arms", NOW(), NOW()),
("Bridge Pose", 1, "Mobility, Buffy", "core", NOW(), NOW()),
("Cat/Cow Stretch", 2, "Mobility, Buffy", "core", NOW(), NOW()),
("Bow Pose", 1, "Mobility, Buffy", "core", NOW(), NOW()),
("Locust Pose", 1, "Mobility, Buffy", "core", NOW(), NOW()),
("25 Jumping Jacks", 3, "Endurance, Buffy", "legs", NOW(), NOW()),
("3 Minute Jump Rope", 3, "Endurance, Buffy", "legs", NOW(), NOW()),
("2 Minute High Knees", 2, "Endurance, Buffy", "legs", NOW(), NOW()),
("15 Long Jumps", 2, "Endurance, Buffy", "legs", NOW(), NOW()),
("10 Tuck Jumps", 2, "Endurance, Buffy", "legs", NOW(), NOW()),
("1 Minute Curb Run", 1, "Endurance, Buffy", "legs", NOW(), NOW()),
("20 Switch Kicks", 2, "Endurance, Buffy", "legs", NOW(), NOW()),
("2 Minute Squat and Kick", 2, "Endurance, Buffy", "core, legs", NOW(), NOW()),
("5 Surrenders (each side)", 3, "Endurance, Strength", "legs", NOW(), NOW()),
("1 Minute Each Direction Side Shuffle", 2, "Endurance, Buffy", "legs", NOW(), NOW()),
("10 Burpees", 2, "Endurance, Strength, Buffy", "arms, core, legs", NOW(), NOW()),
("15 Pushups", 1, "Strength, Endurance, Buffy", "arms", NOW(), NOW()),
("20 Spider Hops", 1, "Endurance, Buffy", "arms, core", NOW(), NOW()),
("20 Skater Hops", 1, "Endurance, Buffy", "arms, legs", NOW(), NOW()),
("20 Pop Squats", 2, "Endurance, Buffy", "legs", NOW(), NOW()),
("15 Plank Up-Downs", 1, "Endurance, Strength, Buffy", "arms, core", NOW(), NOW()),
("15 Repeaters (each side)", 2, "Endurance, Buffy", "arms, legs, core", NOW(), NOW()),
("10 Man Makers", 2, "Strength, Buffy", "arms", NOW(), NOW()),
("Side Plank Left/Right", 2, "Strength, Buffy", "arms, legs, core", NOW(), NOW()),
("Down Dog", 1, "Strength, Buffy", "arms, core", NOW(), NOW()),
("Down Dog Leg Lifts Left/Right", 2, "Strength, Buffy", "arms, core", NOW(), NOW()),
("Down Dog Frog Jumps", 1, "Strength, Buffy", "arms, core", NOW(), NOW()),
("Dolphin Push-ups", 1, "Strength, Buffy", "arms", NOW(), NOW()),
("Forearm Plank", 1, "Strength, Buffy", "arms, core", NOW(), NOW()),
("10 Squat Jumps", 2, "Strength, Buffy", "legs", NOW(), NOW()),
("10 Mountain Climbers", 1, "Strength, Buffy", "arms, legs, core", NOW(), NOW()),
("10 Walking Lunge Left/Right", 2, "Strength, Buffy", "legs", NOW(), NOW()),
("15 Full Situps", 2, "Strength, Buffy", "core", NOW(), NOW()),
("20 Bicycle Crunches (10 each side)", 2, "Strength, Buffy", "core", NOW(), NOW()),
("20 Transverse Crunches (10 each side)", 2, "Strength, Buffy", "core", NOW(), NOW()),
("25 Crunches", 2, "Endurance, Buffy", "core", NOW(), NOW()),
("Boat Pose", 1, "Strength, Buffy", "core", NOW(), NOW()),
("Stretch Pose (Hollow Body)", 1, "Strength, Buffy", "core", NOW(), NOW()),
("5 Core Planks Left/Right", 2, "Strength, Buffy", "arms, core", NOW(), NOW()),
("10 Star Jumps", 1, "Strength, Buffy", "legs", NOW(), NOW()),
("5 Minute Run 30 Seconds/Walk 45 Seconds Interval", 5, "Endurance, Buffy", "legs", NOW(), NOW()),
("5 Minute Run 60 Seconds/Walk 45 Seconds Interval", 5, "Endurance, Buffy", "legs", NOW(), NOW()),
("5 Minute Run 2 Minutes/Walk 30 Seconds Interval", 5, "Endurance, Buffy", "legs", NOW(), NOW()),
("10 Plank Jacks", 1, "Strength, Buffy", "arms, core, legs", NOW(), NOW());


select * from Exercises;