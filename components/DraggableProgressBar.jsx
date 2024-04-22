import React, { useState, useEffect } from 'react';
import { View, PanResponder, StyleSheet, Text } from 'react-native';

const DraggableProgressBar = ({ width, height, barColor, backgroundColor, initialProgress }) => {
  const [progress, setProgress] = useState(initialProgress || 0.5);

  const handlePanResponderMove = (event, gestureState) => {
    const { dx } = gestureState;
    let newProgress = progress + dx / width;

    // Ensure progress stays within 0 to 1 range
    newProgress = Math.max(0, Math.min(1, newProgress));

    setProgress(newProgress);
    
    // Check if progress has reached target labels
    const targetPositions = [0.1, 0.2, 0.3, 0.4];
    targetPositions.forEach(target => {
      if (newProgress >= target && newProgress - dx / width < target) {
        console.log(`Reached ${target * 100}%`);
      }
    });
  };

  useEffect(() => {
    setProgress(initialProgress || 0.5);
  }, [initialProgress]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
    onPanResponderRelease: () => {
      // You can add any logic you want when the user releases the drag
    },
  });

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.progressBarContainer, { backgroundColor }]}>
        <View
          style={[
            styles.progressBar,
            { width: width * progress, backgroundColor: barColor },
          ]}
        />
      </View>
      <View style={styles.tooltipContainer}>
        <View style={[styles.tooltip, { left: width * progress - 10 }]}>
          <Text style={styles.tooltipText}>{Math.round(progress * 100)}</Text>
        </View>
      
      </View>
      <View
        style={[styles.touchArea, { width, height }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  progressBarContainer: {
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  tooltipContainer: {
    position: 'absolute',
    top: -25,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    padding: 5,
    zIndex: 1,
  },
  tooltipText: {
    color: '#fff',
  },
  switchCircle: {
    position: 'absolute',
    backgroundColor: 'blue',
    width: 10,
    height: 10,
    borderRadius: 5,
    zIndex: 2,
  },
  touchArea: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default DraggableProgressBar;
