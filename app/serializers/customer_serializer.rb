class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :contact, :user_name
end
