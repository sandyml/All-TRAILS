class HikeLocateSerializer < ActiveModel::Serializer
 attributes :id, :review, :date, :locate

 belongs_to :locate

 def locate
  self.object.locate
 end

end


# [] nested need to add another serializer