puts "Clearing User/Locate/Hike's old data..."
User.destroy_all
Locate.destroy_all
HikeTrail.destroy_all
# Review.destroy_all

puts "👤 User..."
sandra = User.create(
 account_name: "Sandra", 
 email: "smy@gmail.com", 
 password: "444888"
)
william = User.create(
 account_name: "William", 
 email: "will@gmail.com", 
 password: "112488"
)
grace = User.create(
 account_name: "Grace", 
 email: "gracey123@gmail.com", 
 password: "052884"
)
larry = User.create(
 account_name: "Larry", 
 email: "lawrence88@gmail.com", 
 password: "121588"
)
james = User.create(
 account_name: "James", 
 email: "jamescooks@gmail.com", 
 password: "031588"
)


puts "📍 Locate..."
kaaterskill_falls = Locate.create(
 trail_name: "Kaaterskill Falls", 
 city: "Palenville",
 state: "New York", 
 image_url: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS_tdo4f5ohmFGMQ5Jq4ouGZVCsyk3oPn8FDdErUHIONFTwWJukAjDWW7e-syIr8Nr1",
 difficulty: "Moderate",
 length: "1.6 mi",
 elevation_gain: "396 ft", 
 route_type: "Out & back"
)
buttermilk_falls = Locate.create(
 trail_name: "Buttermilk Falls", 
 state: "Mountain Rd, Layton, NJ", 
 image_url: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS_tdo4f5ohmFGMQ5Jq4ouGZVCsyk3oPn8FDdErUHIONFTwWJukAjDWW7e-syIr8Nr1",
 difficulty: "Hard",
 length: "6.8 mi",
 elevation_gain: "1,453 ft", 
 route_type: "Loop"
)
sleeping_giant = Locate.create(
 trail_name: "Sleeping Giant", 
 city: "Hamden",
 state: "Connecticut",
 image_url: "https://i0.wp.com/explorect.org/wp-content/uploads/2020/03/Sleeping-Giant-Cascades-Trail-scaled.jpg?resize=855%2C570&ssl=1",
 difficulty: "Easy",
 length: "1.5 mi",
 elevation_gain: "446 ft", 
 route_type: "Out & back"
)
breakneck_ridge = Locate.create(
 trail_name: "Breakneck Ridge", 
 city: "Beacon",
 state: "New York",
 image_url: "https://www.travelingfoundlove.com/wp-content/uploads/2021/10/Hiking-in-Hudson-Valley-16.jpg",
 difficulty: "Hard",
 length: "3.2 mi",
 elevation_gain: "1,269 ft", 
 route_type: "Loop"
)
bear_mountain = Locate.create(
 trail_name: "Bear Mountain Loop Trail", 
 city: "Bear Mountain",
 state: "New York",
 image_url: "https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/hotw/bear-mountain-view2-hike-resized_0.jpg?itok=lbGDrIPd",
 difficulty: "Moderate",
 length: "3.8 mi",
 elevation_gain: "1,154 ft", 
 route_type: "Loop"
)
sams_point = Locate.create(
 trail_name: "Sam's Point and Verkeerderkill Falls Trail ",  
 city: "Pine Bush",
 state: "New York",
 image_url: "https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/park/16_SamsPoint2_Chazin2012.jpg?itok=5PfhtPsg",
 difficulty: "Moderate",
 length: "8.3 mi", 
 elevation_gain: "987 ft", 
 route_type: "Loop"
)


puts "🧗 Hike tRAILS..."

HikeTrail.create([
 {
  user_id: sandra.id,
  locate_id: sams_point.id,
  review: "This trail has everything! Climbing up and down, fantastic view, rocky road, and water fall! But does anyone really finish this trail within 3.5 hours? RIGHT NOW ITS ICY SO PLEASE BE CAREFUL",
  date: Date.new(2022,2,3)
 },
 {
  user_id: sandra.id,
  locate_id: kaaterskill_falls.id,
  review: "If it’s winter, you need spikes for the staircases. I needed them on feb 1st 2023. To actual climb the ice at the literal foot of the waterfall, crampons may be better. I started to do it, but chose not to go much further. Easy hike for great views otherwise. Only saw about 5 other people mid afternoon on a weekday.",
  date: Date.new(2021,1,5)
 },
 {
  user_id: sandra.id,
  locate_id: buttermilk_falls.id,
  review: "Gorgeous, everything is a view. Lots of steps, lots of loose gravel.",
  date: Date.new(2022,2,10)
 },
 {
  user_id: william.id,
  locate_id: breakneck_ridge.id,
  review: "This hike was absolutely stunning! I’m not the greatest at directions so there were definitely some spots where I got lost and had to ask for help. Once I realized that there were white spots painted along the trail it made it a lot easier. The trail was pretty nice in the beginning but coming back down there was snow and mud which made the trail a little slick ",
  date: Date.new(2023,1,10)
 },
 {
  user_id: william.id,
  locate_id: sleeping_giant.id,
  review: "I did this a few weeks ago before the snow. Great gradual hike for the winter if you're just looking to get out and get a workout that's enough to get the calfs burning. Great views at the top!",
  date: Date.new(2023,1,15)
 },
 {
  user_id: grace.id,
  locate_id: bear_mountain.id,
  review: "Definitely go counterclockwise. The major Welsh portion of the trail is steep and it is not something you would want to descend. The Appalachian trail portion going down is all stairs.",
  date: Date.new(2023,2,3)
 },
 {
  user_id: larry.id,
  locate_id: bear_mountain.id,
  review: "Definitely go counterclockwise. Make sure you stay hydrated! The Appalachian trail portion going down is all stairs.",
  date: Date.new(2022,11,10)
 },
 {
  user_id: james.id,
  locate_id: breakneck_ridge.id,
  review: "Make sure you carry light! From the lighthouse down total comes up to 6 hours.",
  date: Date.new(2022,11,10)
 }
 ])
 
 
 # sandra_review1 = HikeTrail.create(
 #  user_id: sandra.id,
 #  locate_id: sams_point.id,
 #  review: "This trail has everything! Climbing up and down, fantastic view, rocky road, and water fall! But does anyone really finish this trail within 3.5 hours? RIGHT NOW ITS ICY SO PLEASE BE CAREFUL",
 #  date: Date.new(2001,2,3)
 # )
 # sandra_review2 = HikeTrail.create(
 #  user_id: sandra.id,
 #  locate_id: kaaterskill_falls.id,
 #  review: "If it’s winter, you need spikes for the staircases. I needed them on feb 1st 2023. To actual climb the ice at the literal foot of the waterfall, crampons may be better. I started to do it, but chose not to go much further. Easy hike for great views otherwise. Only saw about 5 other people mid afternoon on a weekday.",
 #  date: Date.new(2001,2,3)
 # )
 # sandra_review3 = HikeTrail.create(
 #  user_id: sandra.id,
 #  locate_id: buttermilk_falls.id,
 #  review: "Gorgeous, everything is a view. Lots of steps, lots of loose gravel.",
 #  date: Date.new(2001,2,3)
 # )
 # william_review1 = HikeTrail.create(
 #  user_id: william.id,
 #  locate_id: breakneck_ridge.id,
 #  review: "This hike was absolutely stunning! I’m not the greatest at directions so there were definitely some spots where I got lost and had to ask for help. Once I realized that there were white spots painted along the trail it made it a lot easier. The trail was pretty nice in the beginning but coming back down there was snow and mud which made the trail a little slick ",
 #  date: Date.new(2001,2,3)
 # )
 # william_review2 = HikeTrail.create(
 #  user_id: william.id,
 #  locate_id: sleeping_giant.id,
 #  review: "I did this a few weeks ago before the snow. Great gradual hike for the winter if you're just looking to get out and get a workout that's enough to get the calfs burning. Great views at the top!",
 #  date: Date.new(2001,2,3)
 # )
 # grace_review1 = HikeTrail.create(
 #  user_id: grace.id,
 #  locate_id: bear_mountain.id,
 #  review: "Definitely go counterclockwise. The major Welsh portion of the trail is steep and it is not something you would want to descend. The Appalachian trail portion going down is all stairs.",
 #  date: Date.new(2001,2,3)
 # )
 # larry_review1 = HikeTrail.create(
 #  user_id: larry.id,
 #  locate_id: bear_mountain.id,
 #  review: "Definitely go counterclockwise. Make sure you stay hydrated! The Appalachian trail portion going down is all stairs.",
 #  date: Date.new(2001,2,3)
 # )
 # james_review1 = HikeTrail.create(
 #  user_id: james.id,
 #  locate_id: breakneck_ridge.id,
 #  review: "Make sure you carry light! From the lighthouse down total comes up to 6 hours.",
 #  date: Date.new(2001,2,3)
 # )
 
 # HikeTrail.create([
#  {
#   users_id: sandra,
#   locate: sams_point,
#   review: "This trail has everything! Climbing up and down, fantastic view, rocky road, and water fall! But does anyone really finish this trail within 3.5 hours? RIGHT NOW ITS ICY SO PLEASE BE CAREFUL",
#   date: Date.new(2001,2,3)
#  },
 # {
 #  users_id: sandra,
 #  locate: kaaterskill_falls,
 #  review: "If it’s winter, you need spikes for the staircases. I needed them on feb 1st 2023. To actual climb the ice at the literal foot of the waterfall, crampons may be better. I started to do it, but chose not to go much further. Easy hike for great views otherwise. Only saw about 5 other people mid afternoon on a weekday.",
 #  date: Date.new(2001,2,3)
 # },
 # {
 #  users_id: sandra,
 #  locate: buttermilk_falls,
 #  review: "Gorgeous, everything is a view. Lots of steps, lots of loose gravel.",
 #  date: Date.new(2001,2,3)
 # },
 # {
 #  users_id: william,
 #  locate: breakneck_ridge,
 #  review: "This hike was absolutely stunning! I’m not the greatest at directions so there were definitely some spots where I got lost and had to ask for help. Once I realized that there were white spots painted along the trail it made it a lot easier. The trail was pretty nice in the beginning but coming back down there was snow and mud which made the trail a little slick ",
 #  date: Date.new(2001,2,3)
 # },
 # {
 #  users_id: william,
 #  locate: sleeping_giant,
 #  review: "I did this a few weeks ago before the snow. Great gradual hike for the winter if you're just looking to get out and get a workout that's enough to get the calfs burning. Great views at the top!",
 #  date: Date.new(2001,2,3)
 # },
 # {
 #  users_id: grace,
 #  locate: bear_mountain,
 #  review: "Definitely go counterclockwise. The major Welsh portion of the trail is steep and it is not something you would want to descend. The Appalachian trail portion going down is all stairs.",
 #  date: Date.new(2001,2,3)
 # },
 # ])
 




puts "✅ Done seeding! Ready to plant tRail! 🌱"