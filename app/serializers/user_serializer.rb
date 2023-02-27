class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email
end