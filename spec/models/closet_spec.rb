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

  describe "scope search" do
    let(:closet1) { FactoryBot.create(:closet, category: "Book") }
    let(:closet2) { FactoryBot.create(:closet, category: "Blog") }
    let(:selected) {[]}
    let(:key) { "B" }

    before do
      closet1
      closet2
    end

    subject { Closet.search(key, selected) }

    context "when selected params isn't present" do
      it 'includes both closet1 and closet2' do
        is_expected.to include closet1
        is_expected.to include closet2
      end
    end

    context "when selected params isn present" do
      let(:selected) { [closet1.id] }
      it 'includes closet2 only' do
        is_expected.to include closet2
        is_expected.not_to include closet1
      end
    end
  end
end
