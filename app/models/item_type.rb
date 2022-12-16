class ItemType < ApplicationRecord
    validates :iname, :desc, presence: true
    validates :iname, uniqueness: true
end
