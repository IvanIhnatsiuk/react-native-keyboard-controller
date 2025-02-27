package com.reactnativekeyboardcontroller.events

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.Event

class FocusedInputTextChangedEvent(
  surfaceId: Int,
  viewId: Int,
  private val text: String,
) : Event<FocusedInputTextChangedEvent>(surfaceId, viewId) {
  override fun getEventName() = EVENT_NAME

  // All events for a given view can be coalesced
  override fun getCoalescingKey(): Short = 0

  override fun getEventData(): WritableMap? =
    Arguments.createMap().apply {
      putString("text", text)
    }

  companion object {
    const val EVENT_NAME = "topFocusedInputTextChanged"
  }
}
