class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_name, :email, :password_digest
end
