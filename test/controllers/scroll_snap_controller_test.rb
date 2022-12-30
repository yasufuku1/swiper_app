require "test_helper"

class ScrollSnapControllerTest < ActionDispatch::IntegrationTest
  test "should get top" do
    get scroll_snap_top_url
    assert_response :success
  end
end
