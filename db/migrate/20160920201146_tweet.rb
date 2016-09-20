class Tweet < ActiveRecord::Migration[5.0]
  def change
      create_table :tweets do |t|
          t.text :content
      end
  end
end
