require 'rails_helper'

RSpec.describe Closet, type: :model do
  context 'associations' do
    it { is_expected.to belong_to :user }
    it { should have_many(:items) }
  end

  describe "#count_items" do
    let(:closet) { FactoryBot.create(:closet) }
    let(:item) { FactoryBot.create(:item, closet: closet) }

    subject { closet.count_items }

    context "There is no item" do
      before do
        closet
      end

      it "return 0" do
        is_expected.to eq(0)
      end
    end

    context "There is item belongs to closet" do
      before do
        item
      end

      it "return 0" do
        is_expected.to eq(1)
      end
    end
  end
end
