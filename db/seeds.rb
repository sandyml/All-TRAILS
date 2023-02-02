# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing User/Locate/Hike's old data..."
User.destroy_all
Locate.destroy_all
# Hike.destroy_all
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
# Hike.create([
#  { account}
# ])




puts "✅ Done seeding! Ready to plant tRail! 🌱"