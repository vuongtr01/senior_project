require 'rails_helper'

RSpec.describe Item, type: :model do
  context 'associations' do
    it { is_expected.to belong_to :closet }
  end

  describe "#data_json" do
    let(:closet) { FactoryBot.create(:closet) }
    let(:item) { FactoryBot.create(:item, closet: closet) }
    let(:expected_result) do
      {
        "id": item.id,
        "name": item.name,
        "location": item.location,
        "buy_date": item.buy_date,
        "expr_date": item.expr_date,
        "amount": item.amount,
        "image": item.image,
        "price": item.price,
        "closet": {
          "id": closet.id,
          "value": closet.category,
          "label": closet.category,
        },
      }
    end

    subject(:result) { item.json_data }

    before do
      expected_result
    end
    context 'get json data' do
      it 'return json data' do
        expect(result["id"]).to eq expected_result[:id]
        expect(result["name"]).to eq expected_result[:name]
      end
    end
  end

  describe "scope search" do
    let(:item1) { FactoryBot.create(:item, name: "Book") }
    let(:item2) { FactoryBot.create(:item, name: "Blog") }
    let(:selected) {[]}
    let(:key) { "B" }

    before do
      item1
      item2
    end

    subject { Item.search(key, selected) }

    context "when selected params isn't present" do
      it 'includes both item1 and item2' do
        is_expected.to include item1
        is_expected.to include item2
      end
    end

    context "when selected params isn present" do
      let(:selected) { [item1.id] }
      it 'includes item2 only' do
        is_expected.to include item2
        is_expected.not_to include item1
      end
    end
  end 
end
